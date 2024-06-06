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
exports.ChannelService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const chat_getway_1 = require("../chatSockets/chat.getway");
let ChannelService = class ChannelService {
    constructor(databaseService, chatGateway) {
        this.databaseService = databaseService;
        this.chatGateway = chatGateway;
    }
    async createDM(createChannelDto) {
        const { name, topic, ...rest } = createChannelDto;
        const data = { name, topic };
        const channel = await this.databaseService.channel.create({
            data: data,
        });
        if (channel) {
            const roles = await this.databaseService.role.createMany({
                data: [
                    {
                        channelID: channel.id,
                        userID: rest.id,
                    },
                    {
                        channelID: channel.id,
                        userID: rest.friendId,
                    },
                ],
            });
            if (roles)
                await this.findOne(channel.id);
        }
    }
    async findOne(id) {
        const res = await this.databaseService.channel.findUnique({
            where: { id: id },
            include: {
                roles: {
                    include: { user: true },
                },
                messages: { orderBy: { createdAT: 'desc' }, take: 1 },
            },
        });
        const channelData = {
            id: res.id,
            roles: [],
            lastMSG: res.messages[0]?.content || '',
            sendAT: res.messages[0]?.createdAT || new Date(),
        };
        res.roles.forEach((role) => {
            const roleData = {
                ...role.user,
                blocked: role.blocked,
            };
            channelData.roles.push(roleData);
        });
        console.log('yeaaaaaaaaaaaaaah');
        this.chatGateway.updateFriendList(channelData);
        return channelData;
    }
    async findMyFriends(id) {
        const res = await this.databaseService.channel.findMany({
            where: {
                AND: [
                    { type: 'DM' },
                    {
                        roles: {
                            some: { userID: id },
                        },
                    },
                ],
            },
            include: {
                roles: {
                    include: { user: true },
                },
                messages: { orderBy: { createdAT: 'desc' }, take: 1 },
            },
        });
        const myFriends = [];
        res.forEach((channel) => {
            const channelData = {
                id: channel.id,
                roles: [],
                lastMSG: channel.messages[0]?.content || '',
                sendAT: channel.messages[0]?.createdAT || new Date(),
            };
            channel.roles.forEach((role) => {
                const roleData = {
                    ...role.user,
                    blocked: role.blocked,
                };
                channelData.roles.push(roleData);
            });
            myFriends.push(channelData);
        });
        return myFriends;
    }
    findAll() {
        return this.databaseService.channel.findMany({
            include: {
                roles: {
                    select: {
                        user: {
                            select: {
                                uid: true,
                                status: true,
                                username: true,
                                email: true,
                                bio: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async updateDM(body) {
        const role = await this.databaseService.role.findFirst({
            where: {
                channelID: body.channelID,
                userID: body.friendId,
            },
        });
        if (role) {
            const newRole = await this.databaseService.role.update({
                where: { id: role.id },
                data: { blocked: body.blocked },
            });
            console.log('newRole>>>', newRole);
            this.chatGateway.updateBlockedFriend(newRole);
            return newRole;
        }
    }
    remove(id) {
        return `This action removes a #${id} channel`;
    }
};
exports.ChannelService = ChannelService;
exports.ChannelService = ChannelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        chat_getway_1.ChatGateway])
], ChannelService);
//# sourceMappingURL=channel.service.js.map