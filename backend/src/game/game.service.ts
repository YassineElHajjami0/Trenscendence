import { Injectable } from "@nestjs/common";


export interface Ball {
	x: number;
	y: number;
	dx: number;
	dy: number;
	raduis: number;
}

export interface Paddle {
	x: number;
	y: number;
	width: number;
	height: number;
	score: number;
}

@Injectable()
export class GameService {
	getGame() {}
}