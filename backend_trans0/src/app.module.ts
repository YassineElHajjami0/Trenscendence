import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ItemsModule } from './items/items.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AchievementsModule } from './achievements/achievements.module';
import { FriendsModule } from './friends/friends.module';
import { AuthModule } from './auth/auth.module';
import { MatchHistoryModule } from './match-history/match-history.module';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    NotificationsModule,
    AchievementsModule,
    ItemsModule,
    FriendsModule,
    AuthModule,
    MatchHistoryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
