import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    sendMessage(message: any): void;
    updateRoles(usersRoles: any): void;
    updateUsersAfterSomeoneKick(usersRoles: any): void;
    updateChannels(): void;
    sendNotification(notification: any): void;
    deleteNotification(notification: any): void;
    updateFriendList(friend: any): void;
    updateBlockedFriend(friend: any): void;
}
