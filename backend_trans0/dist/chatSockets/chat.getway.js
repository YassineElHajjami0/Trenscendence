"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let ChatGateway = class ChatGateway {
    async handleConnection(client) { }
    async handleDisconnect(client) { }
    sendMessage(message) {
        this.server.emit('message', message);
    }
    updateRoles(usersRoles) {
        console.log(')))))))>>>', usersRoles);
        this.server.emit('updateRoles', usersRoles);
    }
    updateUsersAfterSomeoneKick(usersRoles) {
        this.server.emit('updateUsersAfterSomeoneKick', usersRoles);
    }
    updateChannels() {
        this.server.emit('updateChannels');
    }
    sendNotification(notification) {
        this.server.emit('notification', notification);
    }
    deleteNotification(notification) {
        this.server.emit('delete_notification', notification);
    }
    updateFriendList(friend) {
        this.server.emit('update_friend_list', friend);
    }
    updateBlockedFriend(friend) {
        this.server.emit('update_blocked_friend', friend);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3001, {
        cors: {
            origin: 'http://localhost:5252',
        },
    })
], ChatGateway);
//# sourceMappingURL=chat.getway.js.map