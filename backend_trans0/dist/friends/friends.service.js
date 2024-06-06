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
exports.FriendsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const chat_getway_1 = require("../chatSockets/chat.getway");
const channel_service_1 = require("../channel/channel.service");
let FriendsService = class FriendsService {
    constructor(databaseService, chatGateway, channelService) {
        this.databaseService = databaseService;
        this.chatGateway = chatGateway;
        this.channelService = channelService;
    }
    async create(createFriendDto) {
        const { user1Id, user2Id } = createFriendDto;
        const existingFriendship = await this.databaseService.userFriend.findFirst({
            where: {
                OR: [
                    {
                        user1Id: user1Id,
                        user2Id: user2Id,
                    },
                    {
                        user1Id: user2Id,
                        user2Id: user1Id,
                    },
                ],
            },
        });
        if (!existingFriendship) {
            const friend = await this.databaseService.userFriend.create({
                data: createFriendDto,
                include: {
                    usersSendThem: true,
                    usersSendMe: true,
                },
            });
            const channelDto = {
                name: '',
                topic: '',
                id: user1Id,
                friendId: user2Id,
            };
            this.channelService.createDM(channelDto);
        }
    }
    async findAll() {
        return this.databaseService.userFriend.findMany({});
    }
    async getChoosedAvatarOfUser(uid) {
        const choosedItems = await this.databaseService.userItem.findMany({
            select: {
                item: true,
            },
            where: {
                AND: [{ userId: uid }, { choosed: true }],
            },
        });
        const avatar = choosedItems.filter((item) => {
            if (item.item.type == 'avatar') {
                return item.item.name;
            }
        });
        const avatarValue = avatar.length > 0 ? avatar[0].item.name : 'default.png';
        return avatarValue;
    }
    async findOne(id) {
        const friends = await this.databaseService.userFriend.findMany({
            where: {
                OR: [{ user1Id: id }, { user2Id: id }],
                status: 'ACCEPTED',
            },
            include: {
                usersSendThem: {
                    include: {
                        userItems: true,
                    },
                },
                usersSendMe: {
                    include: {
                        userItems: true,
                    },
                },
            },
        });
        const allFriends = await friends
            .map((friend) => {
            const friendData = friend.user1Id === id ? friend.usersSendMe : friend.usersSendThem;
            return {
                uid: friendData.uid,
                username: friendData.username,
                email: friendData.email,
                status: friendData.status,
                avatar: friendData.avatar,
                fsStatus: friend.status,
            };
        })
            .sort((a, b) => {
            const statusOrder = { online: 1, ingame: 2, offline: 3 };
            return statusOrder[a.status] - statusOrder[b.status];
        });
        return allFriends;
    }
    async findIfFriedn(user1Id, user2Id) {
        const friend = await this.databaseService.userFriend.findFirst({
            where: {
                OR: [
                    {
                        user1Id: user1Id,
                        user2Id: user2Id,
                    },
                    {
                        user1Id: user2Id,
                        user2Id: user1Id,
                    },
                ],
            },
        });
        if (friend)
            return true;
        return false;
    }
    async findAllExceptFriends(userId) {
        const friends = await this.databaseService.userFriend.findMany({
            where: {
                OR: [{ user1Id: userId }, { user2Id: userId }],
                NOT: { OR: [{ status: 'PENDING' }, { status: 'NONE' }] },
            },
            select: {
                user1Id: true,
                user2Id: true,
            },
        });
        const friendIds = friends.flatMap((friend) => [
            friend.user1Id,
            friend.user2Id,
        ]);
        friendIds.push(userId);
        const users = await this.databaseService.t_User.findMany({
            where: {
                NOT: {
                    uid: {
                        in: friendIds,
                    },
                },
            },
            include: { userItems: { where: { choosed: true } } },
        });
        const alteredUers = await users.map((u) => {
            if (u.userItems.length === 0) {
                return { ...u, avatar: 'default.png' };
            }
            else
                return u;
        });
        return users;
    }
    async update(id, friendId, updateUserDto) {
        return this.databaseService.userFriend.updateMany({
            where: {
                OR: [
                    { user1Id: id, user2Id: friendId },
                    { user1Id: friendId, user2Id: id },
                ],
            },
            data: { status: updateUserDto.status },
        });
    }
    async remove(id) {
        return this.databaseService.userFriend.deleteMany({
            where: {
                OR: [{ user1Id: id }, { user2Id: id }],
            },
        });
    }
};
exports.FriendsService = FriendsService;
exports.FriendsService = FriendsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        chat_getway_1.ChatGateway,
        channel_service_1.ChannelService])
], FriendsService);
//# sourceMappingURL=friends.service.js.map