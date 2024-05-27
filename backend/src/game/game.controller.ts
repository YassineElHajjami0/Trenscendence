import { Controller, Get } from "@nestjs/common";
import { GameService } from "./game.service";

@Controller()
export class GameController {
	constructor (private readonly GameService: GameService) {}

	@Get()
	getGame() {
		return (this.GameService.getGame());
	}
}