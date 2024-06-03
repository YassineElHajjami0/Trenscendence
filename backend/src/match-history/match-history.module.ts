import { Module } from '@nestjs/common';
import { MatchHistoryService } from './match-history.service';
import { MatchHistoryController } from './match-history.controller';
import { UserAchievementService } from 'src/user-achievement/user-achievement.service';

@Module({
  controllers: [MatchHistoryController],
  providers: [MatchHistoryService, UserAchievementService],
})
export class MatchHistoryModule { }
