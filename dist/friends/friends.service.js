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
let FriendsService = class FriendsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createFriendDto) {
        return this.databaseService.userFriend.create({ data: createFriendDto });
    }
    async findAll() {
        return this.databaseService.userFriend.findMany({});
    }
    async findOne(id) {
        return this.databaseService.userFriend.findFirst({
            where: { user1Id: id },
        });
    }
    async update(id, updateUserDto) {
        return this.databaseService.userFriend.update({
            where: {
                user1Id_user2Id: {
                    user1Id: id,
                    user2Id: id,
                },
            },
            data: updateUserDto,
        });
    }
    async remove(id) {
        return this.databaseService.userFriend.delete({
            where: {
                user1Id_user2Id: {
                    user1Id: id,
                    user2Id: id,
                },
            },
        });
    }
};
exports.FriendsService = FriendsService;
exports.FriendsService = FriendsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], FriendsService);
//# sourceMappingURL=friends.service.js.map