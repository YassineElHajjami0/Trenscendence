import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ChatModule } from 'src/chatSockets/chat.module';
import { MatchHistoryModule } from 'src/match-history/match-history.module';
import { DatabaseService } from 'src/database/database.service';
import { ChatGateway } from 'src/chatSockets/chat.getway';
import { MatchHistoryService } from 'src/match-history/match-history.service';
import { UserAchievementModule } from 'src/user-achievement/user-achievement.module';
import { UserAchievementService } from 'src/user-achievement/user-achievement.service';

@Module({
  // imports: [ChatModule, MatchHistoryModule, UserAchievementModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    DatabaseService,
    ChatGateway,
    MatchHistoryService,
    UserAchievementService,
  ],
  exports: [UsersService],
})
export class UsersModule { }
