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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let UsersService = class UsersService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createUserDto) {
        return this.databaseService.t_User.create({ data: createUserDto });
    }
    async findAll() {
        const users = await this.databaseService.t_User.findMany({});
        return users;
    }
    async findOne(uid) {
        const user = await this.databaseService.t_User.findFirst({
            where: { uid },
            relationLoadStrategy: 'join',
            include: {
                achievements: {
                    select: {
                        achievement: true,
                        date: true,
                        unlocked: true,
                        choosed: true,
                    },
                },
                avatarsAndPaddles: {
                    select: {
                        item: true,
                        unlocked: true,
                        choosed: true,
                    },
                },
                usersSendThem: {
                    select: {
                        usersSendMe: {
                            select: {
                                username: true,
                            },
                        },
                    },
                },
                usersSendMe: {
                    select: {
                        usersSendThem: {
                            select: {
                                username: true,
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            return {};
        }
        const modifiedAchievements = user.achievements.map((achievement) => ({
            name: achievement.achievement.name,
            description: achievement.achievement.description,
            uri: achievement.achievement.uri,
            date: achievement.date,
            unlocked: achievement.unlocked,
            choosed: achievement.choosed,
        }));
        const modifiedAvatarsAndPaddles = user.avatarsAndPaddles.map((avatarsAndPaddle) => ({
            id: avatarsAndPaddle.item.id,
            [avatarsAndPaddle.item.is_avatar === true ? 'avatar' : 'paddle']: avatarsAndPaddle.item.img,
            name: avatarsAndPaddle.item.name,
            description: avatarsAndPaddle.item.description,
            price: avatarsAndPaddle.item.price,
            unlocked: avatarsAndPaddle.unlocked,
            power: avatarsAndPaddle.item.power,
            choosed: avatarsAndPaddle.choosed,
        }));
        const friends = user.usersSendMe.map((friend) => ({
            username: friend.usersSendThem.username,
        }));
        const friends2 = user.usersSendThem.map((friend) => ({
            username: friend.usersSendMe.username,
        }));
        const { usersSendThem, usersSendMe, ...modifiedUser } = user;
        return {
            ...modifiedUser,
            achievements: modifiedAchievements,
            avatarsAndPaddles: modifiedAvatarsAndPaddles,
            friends: [...friends, ...friends2],
        };
    }
    async update(uid, updateUserDto) {
        return this.databaseService.t_User.update({
            where: { uid },
            data: updateUserDto,
        });
    }
    async remove(uid) {
        return this.databaseService.t_User.delete({ where: { uid } });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UsersService);
//# sourceMappingURL=users.service.js.map