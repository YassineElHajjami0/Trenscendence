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
exports.ChannelsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const fs = require("fs");
const path = require("path");
const chat_getway_1 = require("../chatSockets/chat.getway");
let ChannelsService = class ChannelsService {
    constructor(databaseService, chatGateway) {
        this.databaseService = databaseService;
        this.chatGateway = chatGateway;
    }
    async create(file, createChannelDto, userId) {
        const filePath = path.join(process.cwd(), 'public', file.originalname);
        await fs.promises.writeFile(filePath, file.buffer);
        console.log('!!!!!!', createChannelDto);
        const imageName = path.basename(filePath);
        createChannelDto.uri = `http://localhost:3000/${imageName}`;
        const createdChannel = await this.databaseService.channel.create({
            data: createChannelDto,
        });
        await this.databaseService.role.create({
            data: {
                channelID: createdChannel.id,
                userID: parseInt(userId),
                role: 'OWNER',
            },
        });
        this.chatGateway.updateChannels();
        return 'This action adds a new channel';
    }
    async findAll(text) {
        const channels = await this.databaseService.channel.findMany({
            where: {
                OR: [{ type: 'PUBLIC' }, { type: 'PROTECTED' }],
                name: { contains: text },
            },
            take: 10,
        });
        console.log('TEXT =>>', channels);
        return channels;
    }
    async findOne(userID) {
        const roles = await this.databaseService.role.findMany({
            where: { userID },
            include: {
                channels: {
                    include: { roles: true },
                },
            },
        });
        return roles;
    }
    async getRoles(channelId) {
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        console.log('ROLES:', roles);
        return roles;
    }
    async findMessages(channelId) {
        const users = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        return users;
    }
    update(id, updateChannelDto) {
        console.log(updateChannelDto);
        return { data: `This action updates a #${id} channel` };
    }
    async makeAdmin(channelId, userId) {
        const result = await this.databaseService.role.updateMany({
            where: {
                channelID: channelId,
                userID: userId,
            },
            data: { role: 'ADMIN', updatedAt: new Date() },
        });
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        this.chatGateway.updateRoles(roles);
        return result;
    }
    async rmAdmin(channelId, userId) {
        const result = await this.databaseService.role.updateMany({
            where: {
                channelID: channelId,
                userID: userId,
            },
            data: { role: 'USER', updatedAt: new Date() },
        });
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        this.chatGateway.updateRoles(roles);
        return result;
    }
    async joinPublic(channelID, userID) {
        const result = await this.databaseService.role.create({
            data: {
                channelID: channelID,
                userID: userID,
                role: 'USER',
                mutedSince: new Date(),
                condition: 'NORMAL',
                updatedAt: new Date(),
            },
        });
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelID },
            include: { user: true },
        });
        this.chatGateway.updateRoles(roles);
        return result;
    }
    async kick(channelId, userId) {
        const result = await this.databaseService.role.deleteMany({
            where: {
                channelID: channelId,
                userID: userId,
            },
        });
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        console.log('role now:', roles);
        if (roles.length == 0) {
            await this.databaseService.message.deleteMany({
                where: { channelID: channelId },
            });
            await this.databaseService.channel.delete({
                where: { id: channelId },
            });
        }
        this.chatGateway.updateUsersAfterSomeoneKick(roles);
        return result;
    }
    async leave(channelId, userId) {
        const oldestRole = await this.databaseService.role.findMany({
            where: { channelID: channelId, role: { in: ['ADMIN', 'USER'] } },
            include: { user: true },
            orderBy: [
                { role: 'desc' },
                { updatedAt: 'asc' },
            ],
            take: 1,
        });
        if (oldestRole) {
            await this.databaseService.role.deleteMany({
                where: {
                    channelID: channelId,
                    userID: userId,
                },
            });
            await this.databaseService.role.updateMany({
                where: {
                    channelID: oldestRole[0].channelID,
                    userID: oldestRole[0].userID,
                },
                data: { role: 'OWNER' },
            });
        }
        console.log('oldestRole =', oldestRole);
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        this.chatGateway.updateRoles(roles);
    }
    async mute(channelId, userId) {
        const result = await this.databaseService.role.updateMany({
            where: {
                channelID: channelId,
                userID: userId,
            },
            data: { condition: 'MUTED', mutedSince: new Date() },
        });
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        this.chatGateway.updateRoles(roles);
        return result;
    }
    async rmMute(channelId, userId) {
        const result = await this.databaseService.role.updateMany({
            where: {
                channelID: channelId,
                userID: userId,
            },
            data: { condition: 'NORMAL' },
        });
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        this.chatGateway.updateRoles(roles);
        return result;
    }
    async block(channelId, userId) {
        const result = await this.databaseService.role.updateMany({
            where: {
                channelID: channelId,
                userID: userId,
            },
            data: { condition: 'BLOCKED', mutedSince: new Date() },
        });
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        this.chatGateway.updateRoles(roles);
        return result;
    }
    async rmblock(channelId, userId) {
        const result = await this.databaseService.role.updateMany({
            where: {
                channelID: channelId,
                userID: userId,
            },
            data: { condition: 'NORMAL', mutedSince: new Date() },
        });
        const roles = await this.databaseService.role.findMany({
            where: { channelID: channelId },
            include: { user: true },
        });
        this.chatGateway.updateRoles(roles);
        return result;
    }
    remove(id) {
        return `This action removes a #${id} channel`;
    }
};
exports.ChannelsService = ChannelsService;
exports.ChannelsService = ChannelsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        chat_getway_1.ChatGateway])
], ChannelsService);
//# sourceMappingURL=channels.service.js.map