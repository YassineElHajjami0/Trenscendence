import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3001, {
  cors: {
    origin: 'http://localhost:5252',
    methods: ['POST', 'GET'],
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  async handleConnection(client: Socket) {}
  async handleDisconnect(client: Socket) {}

  sendMessage(message: any) {
    this.server.emit('message', message);
  }

  @SubscribeMessage('get-chat')
  handeleGetChat(client: Socket) {}
}
