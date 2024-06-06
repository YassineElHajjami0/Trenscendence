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
exports.UserItemsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let UserItemsService = class UserItemsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createUserItemDto) {
        return this.databaseService.userItem.create({ data: createUserItemDto });
    }
    async findAll() {
        return this.databaseService.userItem.findMany({});
    }
    async findUserItems(userId) {
        const userItems = await this.databaseService.userItem.findMany({
            where: {
                userId: userId,
            },
            select: {
                itemId: true,
                choosed: true,
            },
        });
        const userItemsId = userItems.map((item) => item.itemId);
        const allItems = await this.databaseService.item.findMany();
        const allItemsModified = allItems.map((item) => {
            const newItem = { ...item, choosed: false, owned: false };
            const index = userItemsId.indexOf(item.id);
            if (index != -1) {
                newItem.owned = true;
                newItem.choosed = userItems[index].choosed;
            }
            return newItem;
        });
        return allItemsModified;
    }
    async findOne(id) {
        return this.databaseService.userItem.findMany({ where: { userId: id } });
    }
    async updateOldItem(updateUserItemDto) {
        const ids = {
            userId: updateUserItemDto.userId,
            itemId: updateUserItemDto.oldId,
        };
        return this.databaseService.userItem.update({
            where: { userId_itemId: ids },
            data: { choosed: false },
        });
    }
    async update(updateUserItemDto) {
        console.log(updateUserItemDto);
        const ids = {
            userId: updateUserItemDto.userId,
            itemId: updateUserItemDto.itemId,
        };
        if (updateUserItemDto.oldType == updateUserItemDto.type) {
            await this.updateOldItem(updateUserItemDto);
        }
        await this.databaseService.userItem.update({
            where: { userId_itemId: ids },
            data: { choosed: updateUserItemDto.choosed },
        });
        if (updateUserItemDto.type == 'avatar' && updateUserItemDto.avatar) {
            await this.databaseService.t_User.update({
                where: { uid: updateUserItemDto.userId },
                data: { avatar: updateUserItemDto.avatar },
            });
        }
    }
    async updateToFalse(updateUserItemDto) {
        const userId = updateUserItemDto.userId;
        return await this.databaseService.userItem.updateMany({
            where: { userId },
            data: { choosed: false },
        });
    }
    async remove(id) {
        return this.databaseService.userItem.delete({
            where: { userId_itemId: { userId: id, itemId: id } },
        });
    }
};
exports.UserItemsService = UserItemsService;
exports.UserItemsService = UserItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserItemsService);
//# sourceMappingURL=user-items.service.js.map