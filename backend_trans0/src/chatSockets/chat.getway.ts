import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3001, {
  cors: {
    origin: 'http://localhost:5252',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  async handleConnection(client: Socket) {}
  async handleDisconnect(client: Socket) {}

  sendMessage(message: any) {
    this.server.emit('message', message);
  }
  updateRoles(usersRoles: any) {
    console.log(')))))))>>>', usersRoles);
    this.server.emit('updateRoles', usersRoles);
  }
  updateMessagesAfterBlock() {
    // console.log(')))))))>>>', usersRoles);
    this.server.emit('updateMessagesAfterBlock');
  }
  sendNotification(notification: any) {
    this.server.emit('notification', notification);
  }
}
