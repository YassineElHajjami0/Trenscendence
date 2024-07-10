import { Module } from '@nestjs/common';
import { MatchHistoryService } from './match-history.service';
import { MatchHistoryController } from './match-history.controller';
import { UserAchievementService } from 'src/user-achievement/user-achievement.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [MatchHistoryController],
  providers: [MatchHistoryService, UserAchievementService],
})
export class MatchHistoryModule {}
