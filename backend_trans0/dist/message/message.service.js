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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const chat_getway_1 = require("../chatSockets/chat.getway");
let MessageService = class MessageService {
    constructor(databaseService, chatGateway) {
        this.databaseService = databaseService;
        this.chatGateway = chatGateway;
    }
    async create(createMessageDto) {
        const message = await this.databaseService.message.create({
            data: createMessageDto,
            include: { users: { select: { avatar: true } } },
        });
        this.chatGateway.sendMessage(message);
    }
    findAll() {
        return this.databaseService.message.findMany({});
    }
    async findOne(id) {
        const messages = await this.databaseService.message.findMany({
            where: { channelID: id },
            include: { users: { select: { avatar: true } } },
        });
        return messages;
    }
    update(id, updateMessageDto) {
        return `This action updates a #${id} message`;
    }
    remove(id) {
        return `This action removes a #${id} message`;
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        chat_getway_1.ChatGateway])
], MessageService);
//# sourceMappingURL=message.service.js.map