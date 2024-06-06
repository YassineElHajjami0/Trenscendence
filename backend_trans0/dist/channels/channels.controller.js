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
exports.ChannelsController = void 0;
const common_1 = require("@nestjs/common");
const channels_service_1 = require("./channels.service");
const update_channel_dto_1 = require("./dto/update-channel.dto");
const platform_express_1 = require("@nestjs/platform-express");
const client_1 = require("@prisma/client");
let ChannelsController = class ChannelsController {
    constructor(channelsService) {
        this.channelsService = channelsService;
    }
    create(files, userId, createChannelDto) {
        createChannelDto.code = parseInt(createChannelDto.code.toString());
        console.log('createChannelDto ==> ', createChannelDto);
        return this.channelsService.create(files[0], createChannelDto, userId);
    }
    findAll(text) {
        return this.channelsService.findAll(text);
    }
    findMessages(channelId) {
        return this.channelsService.findMessages(+channelId);
    }
    getRoles(channelId) {
        return this.channelsService.getRoles(+channelId);
    }
    findOne(id) {
        return this.channelsService.findOne(+id);
    }
    makeAdmin(channelId, userId) {
        return this.channelsService.makeAdmin(+channelId, +userId);
    }
    rmAdmin(channelId, userId) {
        return this.channelsService.rmAdmin(+channelId, +userId);
    }
    joinPublic(channelId, userId) {
        return this.channelsService.joinPublic(+channelId, +userId);
    }
    Leave(channelId, userId) {
        return this.channelsService.leave(+channelId, +userId);
    }
    kick(channelId, userId) {
        console.log('PLLLZZ');
        return this.channelsService.kick(+channelId, +userId);
    }
    Mute(channelId, userId) {
        return this.channelsService.mute(+channelId, +userId);
    }
    rmMute(channelId, userId) {
        return this.channelsService.rmMute(+channelId, +userId);
    }
    Block(channelId, userId) {
        return this.channelsService.block(+channelId, +userId);
    }
    RmBlock(channelId, userId) {
        return this.channelsService.rmblock(+channelId, +userId);
    }
    update(id, updateChannelDto) {
        return this.channelsService.update(+id, updateChannelDto);
    }
    remove(id) {
        return this.channelsService.remove(+id);
    }
};
exports.ChannelsController = ChannelsController;
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    (0, common_1.Post)(),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Query)('userId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, Object]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('mustinclude')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('messages'),
    __param(0, (0, common_1.Query)('channelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "findMessages", null);
__decorate([
    (0, common_1.Get)('roles'),
    __param(0, (0, common_1.Query)('channelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "getRoles", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('makeadmin'),
    __param(0, (0, common_1.Query)('channelId')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "makeAdmin", null);
__decorate([
    (0, common_1.Patch)('rmadmin'),
    __param(0, (0, common_1.Query)('channelId')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "rmAdmin", null);
__decorate([
    (0, common_1.Patch)('joinpublic'),
    __param(0, (0, common_1.Query)('channelID')),
    __param(1, (0, common_1.Query)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "joinPublic", null);
__decorate([
    (0, common_1.Patch)('leave'),
    __param(0, (0, common_1.Query)('channelId')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "Leave", null);
__decorate([
    (0, common_1.Patch)('kick'),
    __param(0, (0, common_1.Query)('channelId')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "kick", null);
__decorate([
    (0, common_1.Patch)('mute'),
    __param(0, (0, common_1.Query)('channelId')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "Mute", null);
__decorate([
    (0, common_1.Patch)('rmmute'),
    __param(0, (0, common_1.Query)('channelId')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "rmMute", null);
__decorate([
    (0, common_1.Patch)('block'),
    __param(0, (0, common_1.Query)('channelId')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "Block", null);
__decorate([
    (0, common_1.Patch)('rmblock'),
    __param(0, (0, common_1.Query)('channelId')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "RmBlock", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_channel_dto_1.UpdateChannelDto]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChannelsController.prototype, "remove", null);
exports.ChannelsController = ChannelsController = __decorate([
    (0, common_1.Controller)('channelss'),
    __metadata("design:paramtypes", [channels_service_1.ChannelsService])
], ChannelsController);
//# sourceMappingURL=channels.controller.js.map