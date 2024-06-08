import {
	OnGatewayConnection,
	OnGatewayDisconnect,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { $Enums } from '@prisma/client';
import { Socket, Server } from 'socket.io';
import { MatchHistoryService } from 'src/match-history/match-history.service';

class Ball {
	x: number;
	y: number;
	raduis: number;
	dx: number;
	dy: number;
	speed: number;

	constructor(
		x: number,
		y: number,
		raduis: number,
		dx: number,
		dy: number,
		speed: number,
	) {
		this.x = x;
		this.y = y;
		this.raduis = raduis;
		this.dx = dx;
		this.dy = dy;
		this.speed = speed;
	}
}

class Paddle {
	x: number;
	y: number;
	width: number;
	height: number;
	score: number = 0;

	constructor(x: number, y: number, width: number, height: number) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.score = 0;
	}
}

class MatchDetails {
	createdAt?: Date;
	winnerScore: number;
	loserScore: number;
	gameMode: $Enums.GameMode;
	startAt?: Date;
	endAt?: Date;
	winner: number;
	loser: number;
}

class Room {
	player1: User;
	player2: User;
	ball: Ball;
	// paddle1: Paddle;
	// paddle2: Paddle;
	matchDetails: MatchDetails;
	gameMode: string;
	ballInterval: NodeJS.Timeout;
}

class User {
	userId: number;
	sockets: Socket[] = [];
	paddle: Paddle;
}

const queue: User[] = [];
const againstFriendQueue: User[] = [];
const rooms: Map<string, Room> = new Map();
const users: Map<number, User> = new Map();

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;
const BALL_RADIUS = 15;
const BALL_SPEED = 5;
const BALL_DX = 5;
const BALL_DY = 5;
const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 150;
const PADDLE_SPEED = 10;
const WINNER_SCORE = 1;

@WebSocketGateway(4567, { cors: {origin: 'localhost:4242'}, })
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
	constructor(private readonly matchHistoryService: MatchHistoryService) {}
	@WebSocketServer() server: Server;

	async handleConnection(client: Socket) {}

	handleDisconnect(client: Socket) {
		users.forEach((user) => {
			if (user.sockets.includes(client)) {
				user.sockets.splice(user.sockets.indexOf(client), 1);
				console.log(`${client.id} deleted from user ${user.userId} sockets`);
			}
		});

		// if (queue.length === 0) return;y
		// queue.forEach((user) => {
		// 	if (user.sockets.includes(client)) {
		// 		user.sockets.splice(user.sockets.indexOf(client), 1);
		// 	}
		// });

		// if (againstFriendQueue.length === 0) return;
		// againstFriendQueue.forEach((user) => {
		// 	if (user.sockets.includes(client)) {
		// 		user.sockets.splice(user.sockets.indexOf(client), 1);
		// 	}
		// });

		// if (rooms.size === 0) return;
		// rooms.forEach((room) => {
		// 	if (room.player1.sockets.includes(client)) {
		// 		room.player1.sockets.splice(room.player1.sockets.indexOf(client), 1);
		// 	}
		// 	if (room.player2.sockets.includes(client)) {
		// 		room.player2.sockets.splice(room.player2.sockets.indexOf(client), 1);
		// 	}
		// });
	}

	@SubscribeMessage('new_user')
	handleNewUser(client: Socket, userData: { userId: number }) {
		if (userData.userId !== -1) {
			if (!users.has(userData.userId)) {
				const user = new User();
				user.userId = userData.userId;
				user.sockets.push(client);
				users.set(userData.userId, user);
				console.log(`New user added: ${userData.userId} - with socket ${client.id}`);
			} else if (!users.get(userData.userId)?.sockets.includes(client)) {
				users.get(userData.userId)?.sockets.push(client);
				console.log(`Client ${client.id} added to user ${userData.userId} sockets`);
			}

			// this is for when user refreshes the page
			const roomId = [...rooms.keys()].find((roomId) =>
				roomId.includes(userData.userId.toString()),
			);
			if (roomId) {
				const room = rooms.get(roomId);
				if (room) {
					client.join(roomId);
					if (room.gameMode === 'friend') {
						client.emit('go_to_game', room.player1.userId === userData.userId ? room.player2.userId : room.player1.userId);
						if (room.player1 !== undefined && room.player2 !== undefined && room.ball !== undefined) {
							client.emit('start_game', room.ball, room.player1.paddle, room.player2.paddle, { userId: room.player1.userId, opponentId: room.player2.userId })
						}
					} else if (room.gameMode === 'random') {
						client.emit('go_to_random_game');
						if (room.player1 !== undefined && room.player2 !== undefined && room.ball !== undefined) {
							client.emit('start_game', room.ball, room.player1.paddle, room.player2.paddle, { userId: room.player1.userId, opponentId: room.player2.userId })
						}
					}
				}
			}
		} else {
			console.log('Unauthorized user (not logged in)');
		}
	}

	@SubscribeMessage('quit')
	handleQuit(client: Socket, payload: { userId: number }) {
		if (queue.includes(users.get(payload.userId))) {
			queue.splice(queue.indexOf(users.get(payload.userId)), 1);
		}

		const roomId = [...rooms.keys()].find((roomId) =>
			roomId.includes(payload.userId.toString()),
		);
		const room = rooms.get(roomId);
		if (room) {
			if (room.gameMode === 'friend') {
				room.player1.sockets.forEach((socket) => {
					socket.leave(roomId);
					socket.emit('quited', payload.userId);
				});

				room.player2.sockets.forEach((socket) => {
					socket.leave(roomId);
					socket.emit('quited', payload.userId);
				});
			} else if (room.gameMode === 'random') {
				users.get(payload.userId)?.sockets.forEach((socket) => {
					socket.emit('quited', payload.userId);
				});
			}
			room.gameMode = '';

			rooms.delete(roomId);
		}
	}

	@SubscribeMessage('game_request')
	handleGameRequest(client: Socket, payload: { userId: number; opponentId: number; index: number; table: string }) {
		if (payload.userId === -1) return;
		console.log(`Game request received!`, payload);
		if (users.has(payload.opponentId)) {
			users.get(payload.opponentId)?.sockets.forEach((socket) => {
				socket.emit('game_request_request', { opponentId: payload.userId, index: payload.index, table: payload.table });
			});
		} else {
			client.emit('game_request_request', 'Opponent not found');
		}
	}

	@SubscribeMessage('game_response')
	handleGameResponse(client: Socket, response: { userId: number; accepted: boolean; index: number }) {
		console.log('Game response received ', response);
		if (users.has(response.userId)) {
			users.get(response.userId)?.sockets.forEach((socket) => {
				socket.emit('game_response_response', { accepted: response.accepted, index: response.index });
				console.log(`Game response sent to ${response.userId}`);
			});
		} else {
			client.emit('game_response_response', 'Opponent not found');
		}
	}

	@SubscribeMessage('remove_notification')
	handleRemoveNotification(
		client: Socket,
		payload: { userId: number; opponentId: number },
	) {
		if (users.has(payload.opponentId)) {
			users.get(payload.opponentId)?.sockets.forEach((socket) => {
				socket.emit('remove_notification');
			});
		}
	}

	// Random player

	@SubscribeMessage('join_queue')
	handleJoinQueue(client: Socket, payload: { userId: number }) {
		if (users.has(payload.userId)) {
			const user = users.get(payload.userId);
			if (!queue.includes(user)) {
				if (queue.length === 0) {
					user.paddle = new Paddle(
						0,
						CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
						PADDLE_WIDTH,
						PADDLE_HEIGHT,
					);
				} else {
					user.paddle = new Paddle(
						CANVAS_WIDTH - PADDLE_WIDTH,
						CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
						PADDLE_WIDTH,
						PADDLE_HEIGHT,
					);
				}
				queue.push(user);
			}
			if (queue.length === 2) {
				const player1 = queue.shift();
				const player2 = queue.shift();
				const roomId = `${player1.userId}+${player2.userId}`;
				player1.sockets.forEach((socket) => {
					socket.join(roomId);
				});
				player2.sockets.forEach((socket) => {
					socket.join(roomId);
				});
				console.log(`Room created: ${roomId}`);

				const tmpRoom1 = [...rooms.keys()].find((roomId) =>
					roomId.includes(player1.userId.toString()),
				);
				const tmpRoom2 = [...rooms.keys()].find((roomId) =>
					roomId.includes(player2.userId.toString()),
				);
				if (tmpRoom1) rooms.delete(tmpRoom1);
				if (tmpRoom2) rooms.delete(tmpRoom2);

				const room = new Room();
				room.player1 = player1;
				room.player2 = player2;

				room.ball = new Ball(
					CANVAS_WIDTH / 2,
					CANVAS_HEIGHT / 2,
					BALL_RADIUS,
					BALL_DX,
					BALL_DY,
					BALL_SPEED,
				);

				room.gameMode = 'random';

				rooms.set(roomId, room);
				if (rooms.has(roomId) && rooms.get(roomId)) {
					room.matchDetails = new MatchDetails();
					room.matchDetails.gameMode = $Enums.GameMode.RANDOM;
					room.matchDetails.startAt = new Date();
					player1.sockets.forEach((socket) => {
						socket.emit('start_game', room.ball, player1.paddle, player2.paddle, { userId: player1.userId, opponentId: player2.userId });
					});
					player2.sockets.forEach((socket) => {
						socket.emit('start_game', room.ball, player1.paddle, player2.paddle, { userId: player1.userId, opponentId: player2.userId });
					});

					this.updateBall(room, roomId);
				}
			}
		} else {
			console.log('User not found', payload.userId);
		}
	}

	@SubscribeMessage('go_to_random_game')
	handleGoToRandomGame(client: Socket, payload: { userId: number }) {
		const user = users.get(payload.userId);
		const roomId = payload.userId.toString();
		const tmpRoom = new Room();
		tmpRoom.gameMode = 'random';
		rooms.set(roomId, tmpRoom);

		if (user) {
			user.sockets.forEach((socket) => {
				socket.emit('go_to_random_game');
			});
		}
	}

	@SubscribeMessage('movePaddle')
	handleMovePaddle(
		client: Socket,
		payload: { userId: number; keyCode: string },
	) {
		if (users.has(payload.userId)) {
			const roomId = [...client.rooms].filter((roomId) => roomId !== client.id)[0];
			const room = rooms.get(roomId);
			if (room) {
				const user = users.get(payload.userId);
				if (payload.keyCode === 'up') {
					if (user.paddle.y > 0) {
						user.paddle.y -= PADDLE_SPEED;
					}
				} else if (payload.keyCode === 'down') {
					if (user.paddle.y + user.paddle.height < CANVAS_HEIGHT) {
						user.paddle.y += PADDLE_SPEED;
					}
				}
				room.player1.sockets.forEach((socket) => {
					socket.emit('update', room.ball, room.player1.paddle, room.player2.paddle);
				});
				room.player2.sockets.forEach((socket) => {
					socket.emit('update', room.ball, room.player1.paddle, room.player2.paddle);
				});
			}
		}
	}

	@SubscribeMessage('resign')
	handleResign(client: Socket, payload: { userId: number }) {
		if (users.has(payload.userId)) {
			const roomId = [...client.rooms]
				.filter((roomId) => roomId !== client.id)
				.filter((roomId) => roomId !== payload.userId.toString())[0];
			const room = rooms.get(roomId);
			if (room) {
				clearInterval(room.ballInterval);
				room.gameMode = '';
				room.player1.sockets.forEach((socket) => {
					socket.leave(roomId);
				});
				room.player2.sockets.forEach((socket) => {
					socket.leave(roomId);
				});
				const user = users.get(payload.userId);
				if (user === room.player1) {
					room.matchDetails.endAt = new Date();
					room.matchDetails.winnerScore = room.player2.paddle.score;
					room.matchDetails.loserScore = room.player1.paddle.score;
					room.matchDetails.winner = room.player2.userId;
					room.matchDetails.loser = room.player1.userId;

					this.matchHistoryService.create(room.matchDetails as any);

					room.player2.sockets.forEach((socket) => {
						socket.emit('game_over', 'Opponent resigns. You win.');
					});
					room.player1.sockets.forEach((socket) => {
						socket.emit('game_over', `You concede. You lose.`);
					});
				} else if (user === room.player2) {
					room.matchDetails.endAt = new Date();
					room.matchDetails.winnerScore = room.player1.paddle.score;
					room.matchDetails.loserScore = room.player2.paddle.score;
					room.matchDetails.winner = room.player1.userId;
					room.matchDetails.loser = room.player2.userId;
					this.matchHistoryService.create(room.matchDetails as any);

					room.player1.sockets.forEach((socket) => {
						socket.emit('game_over', 'Opponent resigns. You win.');
					});
					room.player2.sockets.forEach((socket) => {
						socket.emit('game_over', 'You concede. You lose.');
					});
				}
				rooms.delete(roomId);
			}
		}
	}

	// Against friend

	@SubscribeMessage('go_to_game')
	handleGoToGame(
		client: Socket,
		payload: { userId: number; opponentId: number },
	) {
		if (users.has(payload.opponentId) && users.has(payload.userId)) {
			const roomId = `${payload.userId}+${payload.opponentId}`;
			const room = new Room();
			room.player1 = users.get(payload.userId);
			room.player2 = users.get(payload.opponentId);
			room.gameMode = 'friend';

			room.player1.sockets.forEach((socket) => {
				socket.emit('go_to_game', payload.opponentId);
			});

			room.player2.sockets.forEach((socket) => {
				socket.emit('go_to_game', payload.userId);
			});

			room.matchDetails = new MatchDetails();
			room.matchDetails.gameMode = $Enums.GameMode.AGAINST_FRIEND;
			room.matchDetails.createdAt = new Date();

			room.player1?.sockets.forEach((socket) => {
				socket.join(roomId);
			});
			room.player2?.sockets.forEach((socket) => {
				socket.join(roomId);
			});

			rooms.set(roomId, room);
		}
	}

	@SubscribeMessage('ready')
	handleReady(client: Socket, payload: { userId: number }) {
		if (againstFriendQueue.length < 2 && users.has(payload.userId)) {
			if (againstFriendQueue.length === 0) {
				users.get(payload.userId).paddle = new Paddle(
					0,
					CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
					PADDLE_WIDTH,
					PADDLE_HEIGHT,
				);
			} else if (againstFriendQueue.length === 1) {
				users.get(payload.userId).paddle = new Paddle(
					CANVAS_WIDTH - PADDLE_WIDTH,
					CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
					PADDLE_WIDTH,
					PADDLE_HEIGHT,
				);
			}
			againstFriendQueue.push(users.get(payload.userId));
		}
		if (againstFriendQueue.length === 2) {
			const player1 = againstFriendQueue.shift();
			const player2 = againstFriendQueue.shift();
			const roomId = rooms.has(`${player1.userId}+${player2.userId}`)
				? `${player1.userId}+${player2.userId}`
				: rooms.has(`${player2.userId}+${player1.userId}`)
					? `${player2.userId}+${player1.userId}`
					: null;

			if (roomId) {
				const room = rooms.get(roomId);
				room.player1 = player1;
				room.player2 = player2;
				room.ball = new Ball(
					CANVAS_WIDTH / 2,
					CANVAS_HEIGHT / 2,
					BALL_RADIUS,
					BALL_DX,
					BALL_DY,
					BALL_SPEED,
				);

				room.matchDetails.startAt = new Date();

				player1.sockets.forEach((socket) => {
					socket.emit('start_friend_game', room.ball, player1.paddle, player2.paddle, { userId: player1.userId, opponentId: player2.userId });
				});
				player2.sockets.forEach((socket) => {
					socket.emit('start_friend_game', room.ball, player1.paddle, player2.paddle, { userId: player1.userId, opponentId: player2.userId });
				});

				this.updateBall(room, roomId);
			}
		}
	}

	handleMoveBall(room: Room, roomId: string) {
		if (!room) return;

		function resetBall() {
			room.ball.speed = BALL_SPEED;
			room.ball.dx = -BALL_DX * Math.sign(room.ball.dx);
			room.ball.dy = Math.random() < 0.5 ? -BALL_DY : BALL_DY;
			room.ball.x = CANVAS_WIDTH / 2 - room.ball.raduis;
			room.ball.y = CANVAS_HEIGHT / 2 - room.ball.raduis;
		}
		function collision(
			b: { x: number; y: number; raduis: number },
			p: { x: number; y: number; width: number; height: number },
		) {
			const x = Math.max(p.x, Math.min(b.x, p.x + p.width));
			const y = Math.max(p.y, Math.min(b.y, p.y + p.height));
			const distance = Math.sqrt((x - b.x) * (x - b.x) + (y - b.y) * (y - b.y));
			return distance < b.raduis;
		}

		if (room.ball.x < -room.ball.raduis) {
			room.player2.paddle.score++;
			room.player1.sockets.forEach((socket) => {
				socket.emit('update_score', room.player2.paddle.score, room.player1.paddle.score);
			});
			room.player2.sockets.forEach((socket) => {
				socket.emit('update_score', room.player2.paddle.score, room.player1.paddle.score);
			});
			if (room.player2.paddle.score === WINNER_SCORE) {
				room.matchDetails.endAt = new Date();
				room.matchDetails.winnerScore = room.player2.paddle.score;
				room.matchDetails.loserScore = room.player1.paddle.score;
				room.matchDetails.winner = room.player2.userId;
				room.matchDetails.loser = room.player1.userId;
				this.matchHistoryService.create(room.matchDetails as any);

				room.gameMode = '';
				clearInterval(room.ballInterval);
				room.player2.sockets.forEach((socket) => {
					socket.emit('game_over', 'Victory is yours.');
					socket.leave(roomId);
				});
				room.player1.sockets.forEach((socket) => {
					socket.emit('game_over', 'Defeat is yours.');
					socket.leave(roomId);
				});
				rooms.delete(roomId);
				return;
			}
			resetBall();
		} else if (room.ball.x > CANVAS_WIDTH + room.ball.raduis) {
			room.player1.paddle.score++;
			room.player1.sockets.forEach((socket) => {
				socket.emit('update_score', room.player2.paddle.score, room.player1.paddle.score);
			});
			room.player2.sockets.forEach((socket) => {
				socket.emit('update_score', room.player2.paddle.score, room.player1.paddle.score);
			});

			if (room.player1.paddle.score === WINNER_SCORE) {
				room.matchDetails.endAt = new Date();
				room.matchDetails.winnerScore = room.player1.paddle.score;
				room.matchDetails.loserScore = room.player2.paddle.score;
				room.matchDetails.winner = room.player1.userId;
				room.matchDetails.loser = room.player2.userId;
				this.matchHistoryService.create(room.matchDetails as any);

				room.gameMode = '';

				clearInterval(room.ballInterval);
				room.player1.sockets.forEach((socket) => {
					socket.emit('game_over', 'Victory is yours.');
					socket.leave(roomId);
				});
				room.player2.sockets.forEach((socket) => {
					socket.emit('game_over', 'Defeat is yours.');
					socket.leave(roomId);
				});
				rooms.delete(roomId);
				return;
			}
			resetBall();
		}

		room.ball.x += room.ball.dx;
		room.ball.y += room.ball.dy;

		if (
			room.ball.y - room.ball.raduis < 0 ||
			room.ball.y + room.ball.raduis > CANVAS_HEIGHT
		) {
			room.ball.dy = -room.ball.dy;
		}

		const thePlayer = room.ball.x < CANVAS_WIDTH / 2 ? room.player1.paddle : room.player2.paddle;
		if (collision(room.ball, thePlayer)) {
			let collidePoint = room.ball.y - (thePlayer.y + thePlayer.height / 2);
			collidePoint /= room.player1.paddle.height / 2;
			let angleRad = (Math.PI / 4) * collidePoint;
			let direction =
				room.ball.x + room.ball.raduis < CANVAS_WIDTH / 2 ? 1 : -1;
			room.ball.dx = direction * room.ball.speed * Math.cos(angleRad);
			room.ball.dy = room.ball.speed * Math.sin(angleRad);
			if (room.ball.speed < 20) room.ball.speed += 1;
		}

		room.player1.sockets.forEach((socket) => {
			socket.emit('update', room.ball, room.player1.paddle, room.player2.paddle);
		});
		room.player2.sockets.forEach((socket) => {
			socket.emit('update', room.ball, room.player1.paddle, room.player2.paddle);
		});
	}

	updateBall(room: Room, roomId: string) {
		room.ballInterval = setInterval(() => {
			this.handleMoveBall(room, roomId);
		}, 1000 / 60);
	}
}
