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
  paddle1: Paddle;
  paddle2: Paddle;
  matchDetails: MatchDetails;
  gameMode: string;
  ballInterval: NodeJS.Timeout;
}

class User {
  userId: number;
  sockets: Socket[] = [];
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
const WINNER_SCORE = 5;

@WebSocketGateway(4567, {
  cors: {
    origin: 'localhost:4242',
    // methods: ['GET', 'POST'],
    // allowedHeaders: ['my-custom-header'],
    // credentials: true,
    // transports: ['websocket'],
  },
})
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

    // if (queue.length === 0) return;
    // queue.forEach((user) => {
    // 	if (user.sockets.includes(client)) {
    // 		user.sockets.splice(user.sockets.indexOf(client), 1);
    // 		console.log(`${client.id} deleted from queue user ${user.userId} sockets`);
    // 	}
    // });

    // if (againstFriendQueue.length === 0) return;
    // againstFriendQueue.forEach((user) => {
    // 	if (user.sockets.includes(client)) {
    // 		user.sockets.splice(user.sockets.indexOf(client), 1);
    // 		console.log(`${client.id} deleted from againstFriendQueue user ${user.userId} sockets`);
    // 	}
    // });

    // if (rooms.size === 0) return;
    // rooms.forEach((room) => {
    // 	if (room.player1.sockets.includes(client)) {
    // 		room.player1.sockets.splice(room.player1.sockets.indexOf(client), 1);
    // 		console.log(`${client.id} deleted from room player1 ${room.player1.userId} sockets`);
    // 	}
    // 	if (room.player2.sockets.includes(client)) {
    // 		room.player2.sockets.splice(room.player2.sockets.indexOf(client), 1);
    // 		console.log(`${client.id} deleted from room player2 ${room.player2.userId} sockets`);
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
        console.log(
          `New user added: ${userData.userId} - with socket ${client.id}`,
        );
      } else if (!users.get(userData.userId)?.sockets.includes(client)) {
        users.get(userData.userId)?.sockets.push(client);
        console.log(
          `Client ${client.id} added to user ${userData.userId} sockets`,
        );
      }

      const roomId = [...rooms.keys()].find((roomId) =>
        roomId.includes(userData.userId.toString()),
      );
      if (roomId) {
        const room = rooms.get(roomId);
        console.log(room.gameMode);
        if (room) {
          client.join(roomId);
          if (room.gameMode === 'friend') {
            client.emit(
              'go_to_game',
              room.player1.userId === userData.userId
                ? room.player2.userId
                : room.player1.userId,
            );
            if (
              room.player1 !== undefined &&
              room.player2 !== undefined &&
              room.ball !== undefined &&
              room.paddle1 !== undefined &&
              room.paddle2 !== undefined
            ) {
              client.emit(
                'start_friend_game',
                room.ball,
                room.paddle1,
                room.paddle2,
                {
                  userId: room.player1.userId,
                  opponentId: room.player2.userId,
                },
              );
            }
          } else if (room.gameMode === 'random') {
            client.emit('go_to_random_game');
            if (
              room.player1 !== undefined &&
              room.player2 !== undefined &&
              room.ball !== undefined &&
              room.paddle1 !== undefined &&
              room.paddle2 !== undefined
            ) {
              client.emit('start_game', room.ball, room.paddle1, room.paddle2, {
                userId: room.player1.userId,
                opponentId: room.player2.userId,
              });
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
    console.log('Room id: ', roomId);
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
  handleGameRequest(
    client: Socket,
    payload: {
      userId: number;
      opponentId: number;
      index: number;
      table: string;
    },
  ) {
    if (payload.userId === -1) return;
    console.log(`Game request received!`, payload);
    if (users.has(payload.opponentId)) {
      users.get(payload.opponentId)?.sockets.forEach((socket) => {
        socket.emit('game_request_request', {
          userId: payload.userId,
          index: payload.index,
          table: payload.table,
        });
      });
    } else {
      client.emit('game_request_request', 'Opponent not found');
    }
  }

  @SubscribeMessage('game_response')
  handleGameResponse(
    client: Socket,
    response: { userId: number; accepted: boolean; index: number },
  ) {
    console.log('Game response received ', response);
    if (users.has(response.userId)) {
      users.get(response.userId)?.sockets.forEach((socket) => {
        socket.emit('game_response_response', {
          accepted: response.accepted,
          index: response.index,
        });
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
        socket.emit('remove_notification', payload.userId);
      });
    }
  }

  // Random player

  @SubscribeMessage('join_queue')
  handleJoinQueue(client: Socket, payload: { userId: number }) {
    if (users.has(payload.userId)) {
      const user = users.get(payload.userId);
      if (!queue.includes(user)) {
        queue.push(user);
        // if (!user.sockets.includes(client)) {
        // 	user.sockets.push(client);
        // }
        console.log(
          'user found and Joining queue',
          payload.userId,
          '  queue length: ',
          queue.length,
        );
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
        room.paddle1 = new Paddle(
          0,
          CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
          PADDLE_WIDTH,
          PADDLE_HEIGHT,
        );
        room.paddle2 = new Paddle(
          CANVAS_WIDTH - PADDLE_WIDTH,
          CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
          PADDLE_WIDTH,
          PADDLE_HEIGHT,
        );
        room.gameMode = 'random';

        rooms.set(roomId, room);
        if (rooms.has(roomId) && rooms.get(roomId)) {
          room.matchDetails = new MatchDetails();
          room.matchDetails.gameMode = $Enums.GameMode.RANDOM; // random player mode (change it later)
          room.matchDetails.startAt = new Date();
          player1.sockets.forEach((socket) => {
            socket.emit('start_game', room.ball, room.paddle1, room.paddle2, {
              userId: player1.userId,
              opponentId: player2.userId,
            });
          });
          player2.sockets.forEach((socket) => {
            socket.emit('start_game', room.ball, room.paddle1, room.paddle2, {
              userId: player1.userId,
              opponentId: player2.userId,
            });
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
      const roomId = [...client.rooms].filter(
        (roomId) => roomId !== client.id,
      )[0];
      const room = rooms.get(roomId);
      if (room) {
        if (users.get(payload.userId) === room.player1) {
          if (payload.keyCode === 'up') {
            if (room.paddle1.y > 0) {
              room.paddle1.y -= PADDLE_SPEED;
            }
          } else if (payload.keyCode === 'down') {
            if (room.paddle1.y + room.paddle1.height < CANVAS_HEIGHT) {
              room.paddle1.y += PADDLE_SPEED;
            }
          }
        } else if (users.get(payload.userId) === room.player2) {
          if (payload.keyCode === 'up') {
            if (room.paddle2.y > 0) {
              room.paddle2.y -= PADDLE_SPEED;
            }
          } else if (payload.keyCode === 'down') {
            if (room.paddle2.y + room.paddle2.height < CANVAS_HEIGHT) {
              room.paddle2.y += PADDLE_SPEED;
            }
          }
        }
        room.player1.sockets.forEach((socket) => {
          socket.emit('update', room.ball, room.paddle1, room.paddle2);
        });
        room.player2.sockets.forEach((socket) => {
          socket.emit('update', room.ball, room.paddle1, room.paddle2);
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
        if (users.get(payload.userId) === room.player1) {
          room.matchDetails.endAt = new Date();
          room.matchDetails.winnerScore = room.paddle2.score;
          room.matchDetails.loserScore = room.paddle1.score;
          room.matchDetails.winner = room.player2.userId;
          room.matchDetails.loser = room.player1.userId;

          this.matchHistoryService.create(room.matchDetails as any);
          console.log('Match history created: ');

          room.player2.sockets.forEach((socket) => {
            socket.emit('game_over', 'Opponent resigns. You win.');
          });
          room.player1.sockets.forEach((socket) => {
            socket.emit('game_over', `You concede. You lose.`);
          });
        } else {
          room.matchDetails.endAt = new Date();
          room.matchDetails.winnerScore = room.paddle1.score;
          room.matchDetails.loserScore = room.paddle2.score;
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

      // room.ball = new B-all(1000 / 2, 500 / 2, 15, 10, 10, 5); // if i remove this i got an error (idk why)
      // room.paddle1 = new Paddle(0, 500 / 2 - 150 / 2, 20, 150); // if i remove this i got an error (idk why)
      // room.paddle2 = new Paddle(1000 - 20, 500 / 2 - 150 / 2, 20, 150); // if i remove this i got an error (idk why)

      room.gameMode = 'friend';
      room.player1.sockets.forEach((socket) => {
        socket.emit('go_to_game', payload.opponentId);
      });

      room.player2.sockets.forEach((socket) => {
        socket.emit('go_to_game', payload.userId);
      });

      room.matchDetails = new MatchDetails();
      room.matchDetails.gameMode = $Enums.GameMode.AGAINST_FRIEND; // against friend mode (change it later)
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
      againstFriendQueue.push(users.get(payload.userId));
      console.log(
        'againstFriendQueue length: ',
        againstFriendQueue.length,
        'users in againstFriendQueue: ',
        againstFriendQueue,
      );
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
        room.ball = new Ball(
          CANVAS_WIDTH / 2,
          CANVAS_HEIGHT / 2,
          BALL_RADIUS,
          BALL_DX,
          BALL_DY,
          BALL_SPEED,
        );
        room.paddle1 = new Paddle(
          0,
          CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
          PADDLE_WIDTH,
          PADDLE_HEIGHT,
        );
        room.paddle2 = new Paddle(
          CANVAS_WIDTH - PADDLE_WIDTH,
          CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
          PADDLE_WIDTH,
          PADDLE_HEIGHT,
        );

        room.matchDetails.startAt = new Date();

        player1.sockets.forEach((socket) => {
          socket.emit(
            'start_friend_game',
            room.ball,
            room.paddle1,
            room.paddle2,
            { userId: player1.userId, opponentId: player2.userId },
          );
        });
        player2.sockets.forEach((socket) => {
          socket.emit(
            'start_friend_game',
            room.ball,
            room.paddle1,
            room.paddle2,
            { userId: player1.userId, opponentId: player2.userId },
          );
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
      room.paddle1.score++;
      room.player1.sockets.forEach((socket) => {
        socket.emit('update_score', room.paddle1.score, room.paddle2.score);
      });
      room.player2.sockets.forEach((socket) => {
        socket.emit('update_score', room.paddle1.score, room.paddle2.score);
      });
      if (room.paddle1.score === WINNER_SCORE) {
        room.matchDetails.endAt = new Date();
        room.matchDetails.winnerScore = room.paddle1.score;
        room.matchDetails.loserScore = room.paddle2.score;
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
    } else if (room.ball.x > CANVAS_WIDTH + room.ball.raduis) {
      room.paddle2.score++;
      room.player2.sockets.forEach((socket) => {
        socket.emit('update_score', room.paddle1.score, room.paddle2.score);
      });
      room.player1.sockets.forEach((socket) => {
        socket.emit('update_score', room.paddle1.score, room.paddle2.score);
      });
      if (room.paddle2.score === WINNER_SCORE) {
        room.matchDetails.endAt = new Date();
        room.matchDetails.winnerScore = room.paddle2.score;
        room.matchDetails.loserScore = room.paddle1.score;
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
    }

    room.ball.x += room.ball.dx;
    room.ball.y += room.ball.dy;

    if (
      room.ball.y - room.ball.raduis < 0 ||
      room.ball.y + room.ball.raduis > CANVAS_HEIGHT
    ) {
      room.ball.dy = -room.ball.dy;
    }

    const thePlayer =
      room.ball.x < CANVAS_WIDTH / 2 ? room.paddle1 : room.paddle2;
    if (collision(room.ball, thePlayer)) {
      let collidePoint = room.ball.y - (thePlayer.y + thePlayer.height / 2);
      collidePoint /= room.paddle2.height;
      let angleRad = (Math.PI / 4) * collidePoint;
      let direction =
        room.ball.x + room.ball.raduis < CANVAS_WIDTH / 2 ? 1 : -1;
      room.ball.dx = direction * room.ball.speed * Math.cos(angleRad);
      room.ball.dy = room.ball.speed * Math.sin(angleRad);
      if (room.ball.speed < 20) room.ball.speed += 1;
    }

    room.player1.sockets.forEach((socket) => {
      socket.emit('update', room.ball, room.paddle1, room.paddle2);
    });
    room.player2.sockets.forEach((socket) => {
      socket.emit('update', room.ball, room.paddle1, room.paddle2);
    });
  }

  updateBall(room: Room, roomId: string) {
    room.ballInterval = setInterval(() => {
      this.handleMoveBall(room, roomId);
    }, 1000 / 60);
  }
}
