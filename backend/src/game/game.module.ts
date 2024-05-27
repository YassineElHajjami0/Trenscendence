import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameGateway } from './game.gateway';
import { MatchHistoryModule } from 'src/match-history/match-history.module';
import { MatchHistoryService } from 'src/match-history/match-history.service';

@Module({
  controllers: [GameController],
  providers: [GameService, GameGateway, MatchHistoryService],
  // imports: [MatchHistoryModule],
})
export class GameModule {}
