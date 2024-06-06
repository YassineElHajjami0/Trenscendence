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
exports.UserItemsController = void 0;
const common_1 = require("@nestjs/common");
const user_items_service_1 = require("./user-items.service");
const client_1 = require("@prisma/client");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let UserItemsController = class UserItemsController {
    constructor(userItemsService) {
        this.userItemsService = userItemsService;
    }
    create(createUserItemDto) {
        return this.userItemsService.create(createUserItemDto);
    }
    findAll(userId) {
        if (userId) {
            return this.userItemsService.findUserItems(+userId);
        }
        return this.userItemsService.findAll();
    }
    findOne(id) {
        return this.userItemsService.findOne(+id);
    }
    update(updateUserItemDto) {
        return this.userItemsService.update(updateUserItemDto);
    }
    updateToFalse(updateUserItemDto) {
        return this.userItemsService.updateToFalse(updateUserItemDto);
    }
    remove(id) {
        return this.userItemsService.remove(+id);
    }
};
exports.UserItemsController = UserItemsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserItemsController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserItemsController.prototype, "update", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Patch)('false'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserItemsController.prototype, "updateToFalse", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserItemsController.prototype, "remove", null);
exports.UserItemsController = UserItemsController = __decorate([
    (0, common_1.Controller)('useritems'),
    __metadata("design:paramtypes", [user_items_service_1.UserItemsService])
], UserItemsController);
//# sourceMappingURL=user-items.controller.js.map