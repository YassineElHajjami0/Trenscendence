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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const chat_getway_1 = require("../chatSockets/chat.getway");
const database_service_1 = require("../database/database.service");
let NotificationsService = class NotificationsService {
    constructor(databaseService, chatGateway) {
        this.databaseService = databaseService;
        this.chatGateway = chatGateway;
    }
    async create(createNotificationDto) {
        const getNotificatons = await this.databaseService.notification.findFirst({
            where: {
                ruserId: createNotificationDto.ruserId,
                suserId: createNotificationDto.suserId,
            },
        });
        if (getNotificatons)
            return;
        const notification = await this.databaseService.notification.create({
            data: createNotificationDto,
            include: { suser: true },
        });
        this.chatGateway.sendNotification(notification);
        return notification;
    }
    async createChannelNotif(createNotificationDto) {
        console.log('createNotificationDto=>', createNotificationDto);
        const getNotificatons = await this.databaseService.notification.findFirst({
            where: {
                chnnelId: createNotificationDto.chnnelId,
                suserId: createNotificationDto.suserId,
                ruserId: createNotificationDto.ruserId,
            },
        });
        if (getNotificatons) {
            console.log('DEJA VU');
            return;
        }
        const notification = await this.databaseService.notification.create({
            data: createNotificationDto,
            include: { suser: true },
        });
        this.chatGateway.sendNotification(notification);
        return notification;
    }
    async findAll() {
        return this.databaseService.notification.findMany({});
    }
    async findOne(id) {
        return this.databaseService.notification.findMany({
            where: { ruserId: id, read: false },
            include: { suser: true },
        });
    }
    async update(id, updateNotificationDto) {
        return this.databaseService.notification.update({
            where: { id },
            data: updateNotificationDto,
        });
    }
    async remove(id) {
        const res = await this.databaseService.notification.delete({
            where: { id },
        });
        this.chatGateway.deleteNotification(res);
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        chat_getway_1.ChatGateway])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map