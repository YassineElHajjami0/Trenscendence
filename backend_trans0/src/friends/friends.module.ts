import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { ChatModule } from 'src/chatSockets/chat.module';

@Module({
  imports: [ChatModule],
  controllers: [FriendsController],
  providers: [FriendsService],
})
export class FriendsModule {}
