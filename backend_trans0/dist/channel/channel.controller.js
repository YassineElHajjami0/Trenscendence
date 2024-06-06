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
exports.ChannelController = void 0;
const common_1 = require("@nestjs/common");
const channel_service_1 = require("./channel.service");
let ChannelController = class ChannelController {
    constructor(channelService) {
        this.channelService = channelService;
    }
    create(createChannelDto) {
        console.log('hana d5altttttt');
        return this.channelService.createDM(createChannelDto);
    }
    findMyFriends(id) {
        return this.channelService.findMyFriends(+id);
    }
    findAll() {
        return this.channelService.findAll();
    }
    findOne(id) {
        return this.channelService.findOne(+id);
    }
    updateDM(updateChannelDto) {
        return this.channelService.updateDM(updateChannelDto);
    }
    remove(id) {
        return this.channelService.remove(+id);
    }
};
exports.ChannelController = ChannelController;
__decorate([
    (0, common_1.Post)('/dm'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChannelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/dm/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChannelController.prototype, "findMyFriends", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChannelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChannelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/dm'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChannelController.prototype, "updateDM", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChannelController.prototype, "remove", null);
exports.ChannelController = ChannelController = __decorate([
    (0, common_1.Controller)('channels'),
    __metadata("design:paramtypes", [channel_service_1.ChannelService])
], ChannelController);
//# sourceMappingURL=channel.controller.js.map