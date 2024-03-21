import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ItemsModule } from './items/items.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AchievementsModule } from './achievements/achievements.module';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    NotificationsModule,
    AchievementsModule,
    ItemsModule,
    FriendsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
