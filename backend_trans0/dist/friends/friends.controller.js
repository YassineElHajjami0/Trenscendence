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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsController = void 0;
const common_1 = require("@nestjs/common");
const friends_service_1 = require("./friends.service");
const client_1 = require("@prisma/client");
let FriendsController = class FriendsController {
    constructor(friendsService) {
        this.friendsService = friendsService;
    }
    create(createFriendDto) {
        return this.friendsService.create(createFriendDto);
    }
    findAll() {
        return this.friendsService.findAll();
    }
    findOne(id) {
        return this.friendsService.findOne(+id);
    }
    findAllExceptFriends(id) {
        return this.friendsService.findAllExceptFriends(+id);
    }
    findIfFriend(id, friendId) {
        return this.friendsService.findIfFriedn(+id, +friendId);
    }
    update(id, friendId, updateFriendDto) {
        return this.friendsService.update(+id, +friendId, updateFriendDto);
    }
    remove(id) {
        return this.friendsService.remove(+id);
    }
};
exports.FriendsController = FriendsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FriendsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FriendsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FriendsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/allusers/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FriendsController.prototype, "findAllExceptFriends", null);
__decorate([
    (0, common_1.Get)('/me/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('friendId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], FriendsController.prototype, "findIfFriend", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('friendId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", void 0)
], FriendsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FriendsController.prototype, "remove", null);
exports.FriendsController = FriendsController = __decorate([
    (0, common_1.Controller)('friends'),
    __metadata("design:paramtypes", [friends_service_1.FriendsService])
], FriendsController);
//# sourceMappingURL=friends.controller.js.map