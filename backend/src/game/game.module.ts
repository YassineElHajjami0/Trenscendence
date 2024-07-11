import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameGateway } from './game.gateway';
import { MatchHistoryModule } from 'src/match-history/match-history.module';
import { MatchHistoryService } from 'src/match-history/match-history.service';
import { UserAchievementService } from 'src/user-achievement/user-achievement.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [GameController],
  providers: [
    GameService,
    GameGateway,
    MatchHistoryService,
    UserAchievementService,
  ],
  imports: [UsersModule, MatchHistoryModule],
})
export class GameModule {}
