import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import './game-page.css'

function RobotGame() {
	const [leftFace, setLeftFace] = useState('/game/happy.png');
	const [rightFace, setRightFace] = useState('/game/happy.png');
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current as HTMLCanvasElement | null;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		function vec2(x: number, y: number) {
			return { x: x, y: y };
		}

		class Ball {
			pos: any;
			velocity: any;
			radius: any;
		
			constructor(pos: any, velocity: any, radius: any) {
				this.pos = pos;
				this.velocity = velocity;
				this.radius = radius;
			}
		
			update() {
				this.pos.x += this.velocity.x;
				this.pos.y += this.velocity.y;
			}
		
			draw() {
				if (!ctx) return;
		
				ctx.fillStyle = "white";
				ctx.strokeStyle = "white";
		
				ctx.beginPath();
				ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
				ctx.fill();
				ctx.stroke();
			}
		}

		const keyPressed: any[] = [];
		const KEY_UP_CODE = 38;
		const KEY_DOWN_CODE = 40;
	
		const handleKeyDown = (e: any) => {
			keyPressed[e.keyCode] = true;
		};
	
		const handleKeyUp = (e: any) => {
			keyPressed[e.keyCode] = false;
		};
	
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		class Paddle {
			pos: any;
			velocity: any;
			width: number;
			height: number;
			score: number;
		
			constructor(pos: any, velocity: any, width: number, height: number) {
				this.pos = pos;
				this.velocity = velocity;
				this.width = width;
				this.height = height;
				this.score = 0;
			}
		
			update() {
				if (keyPressed[KEY_UP_CODE]) {
					this.pos.y -= this.velocity.y;
				}
		
				if (keyPressed[KEY_DOWN_CODE]) {
					this.pos.y += this.velocity.y;
				}
			}
		
			draw() {
				if (!ctx) return;
				ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
			}
		
			getHalfWidth() {
				return this.width / 2;
			}
		
			getHalfHeight() {
				return this.height / 2;
			}
		
			getCenter() {
				return vec2(
					this.pos.x + this.getHalfWidth(),
					this.pos.y + this.getHalfHeight()
				);
			}
		}

		function respawnBall(ball: any) {
			if (ball.velocity.x > -100) {
				if (!canvas) return;
				ball.pos.x = canvas.width - 200;
				ball.pos.y = Math.random() * (canvas.height - 200) + 100;
			}
			
			if (ball.velocity.x > -100) {
				ball.pos.x = 200;
				if (!canvas) return;
				ball.pos.y = Math.random() * (canvas.height - 200) + 100;
			}

			ball.velocity.x *= -1;
			ball.velocity.y *= -1;
		}

		function increaseScore(ball: any, paddleLeft: any, paddleRight: any) {
			if (ball.pos.x <= -ball.radius) {
				paddleRight.score += 1;
				document.getElementById("rightScore")!.innerHTML = paddleRight.score.toString();
				respawnBall(ball);
			}
			
			if (canvas && ball.pos.x >= canvas.width + ball.radius) {
				paddleLeft.score += 1;
				document.getElementById("leftScore")!.innerHTML = paddleLeft.score.toString();
				respawnBall(ball);
			}


			const faceLeft = document.getElementById("faceLeft") as HTMLImageElement | null;
			if (!faceLeft) return;
			const faceRight = document.getElementById("faceRight") as HTMLImageElement | null;
			if (!faceRight) return;
			if (paddleLeft.score > paddleRight.score) {
				setLeftFace("/game/happy.png");
				setRightFace("/game/sad.png");
				faceLeft.style.opacity= "1";
				faceRight.style.opacity = "1";
			} else if (paddleRight.score > paddleLeft.score) {
				setRightFace("/game/happy.png");
				setLeftFace("/game/sad.png");
				faceLeft.style.opacity= "1";
				faceRight.style.opacity = "1";
			} else {
				faceRight.src = "/game/happy.png";
				faceLeft.src = "/game/happy.png";
				faceLeft.style.opacity= "1";
				faceRight.style.opacity = "1";
			}
		}


		function ballCollisionWithEdges(ball: any) {
			if (!canvas) return;
			if (ball.pos.y + ball.radius >= canvas.height) {
			  ball.velocity.y *= -1;
			}

			if (ball.pos.y - ball.radius <= 0) {
			  ball.velocity.y *= -1;
			}
		}

		function paddleCollisionWithEdge(paddle: any) {
			if (paddle.pos.y <= 0) {
				paddle.pos.y = 0;
			}
			if (!canvas) return;
			if (paddle.pos.y + paddle.height >= canvas.height) {
				paddle.pos.y = canvas.height - paddle.height;
			}
		}

		function ballPaddleCollision(ball: any, paddle: any) {
			let dx = Math.abs(ball.pos.x - paddle.getCenter().x);
			let dy = Math.abs(ball.pos.y - paddle.getCenter().y);

			if (dx <= ball.radius + paddle.getHalfWidth()
			&& dy <= paddle.getHalfHeight() + ball.radius) {
			  ball.velocity.x *= -1;
			}
		}

		function botPlayer(ball: any, paddle: any) {
			if (!canvas) return;
			if (ball.velocity.x > 0) {
				if (ball.pos.y > paddle.pos.y) {
					paddle.pos.y += paddle.velocity.y;
					if (paddle.pos.y + paddle.height >= canvas.height) {
						paddle.pos.y = canvas.height - paddle.height;
					}
				}
				if (ball.pos.y < paddle.pos.y) {
					paddle.pos.y -= paddle.velocity.y;
					if (paddle.pos.y <= 0) {
						paddle.pos.y = 0;
					}
				}
			}
		}

	const ballRadius = 4;
	const ballVelocity = vec2(3, 3);
	const paddleWidth = 7;
	const paddleHeight = 40;
	const paddleVelocity = vec2(0, 3);
	const paddleLeftPos = vec2(0, 200);
	const paddleRightPos = vec2(canvas.width - paddleWidth, 30);
	const ballPos = vec2(100, 50);

	const ball = new Ball(ballPos, ballVelocity, ballRadius);
	const paddleLeft = new Paddle(paddleLeftPos, paddleVelocity, paddleWidth, paddleHeight);
	const paddleRight = new Paddle(paddleRightPos, paddleVelocity, paddleWidth, paddleHeight);

    function gameUpdate() {
		ball.update();
		paddleLeft.update();
		paddleCollisionWithEdge(paddleLeft);
		ballCollisionWithEdges(ball);
		ballPaddleCollision(ball, paddleLeft);
		ballPaddleCollision(ball, paddleRight);
		botPlayer(ball, paddleRight);
		increaseScore(ball, paddleLeft, paddleRight);
    }

    function gameDraw() {
		ball.draw();
		paddleLeft.draw();
		paddleRight.draw();
    }

    function gameLoop() {
		if (!canvas) return;
		if (!ctx) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		window.requestAnimationFrame(gameLoop);
		gameUpdate();
		gameDraw();
    }

    gameLoop();

    return () => {
		window.removeEventListener('keydown', handleKeyDown);
		window.removeEventListener('keyup', handleKeyUp);
    };

	}, []);

	return (
		<div className='game-container'>
			<span id='resign-button'> resign
				<Image priority={false} src="/game/resign.png" alt="" width={20} height={20} />
			</span>
			<Image priority={false} id='character' src="/game/character.png" alt="" width={280} height={270} />
			<div className="canvas-container">
				<div className="info-bar">
					<div className="left-player-info">
						<Image priority={false} id='' src="/game/icon1.png" alt="" width={50} height={50} />
						<span>Player50401</span>
						<Image priority={false} id='faceLeft' src={leftFace} alt="" width={30} height={30} />
					</div>
					<span id="leftScore">0</span>
					<span id="versus">VS</span>
					<span id="rightScore">0</span>
					<div className="right-player-info">
						<Image priority={false} id='faceRight' src={rightFace} alt="" width={30} height={30} />
						<span>Player52101</span>
						<Image priority={false} id='' src="/game/icon2.png" alt="" width={50} height={50} />
					</div>
				</div>
			</div>
			<canvas id='canvas' ref={canvasRef}></canvas>
		</div>
	);
}

export default RobotGame