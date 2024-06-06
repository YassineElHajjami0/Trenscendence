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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const database_service_1 = require("../database/database.service");
let UploadService = class UploadService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    create(createUploadDto) {
        return 'This action adds a new upload';
    }
    findAll() {
        return `This action returns all upload`;
    }
    findOne(id) {
        return `This action returns a #${id} upload`;
    }
    update(id, updateUploadDto) {
        return `This action updates a #${id} upload`;
    }
    async updateUser(uid, type, value) {
        const data = type == 'avatar'
            ? { avatar: `http://localhost:3000/${value}` }
            : { banner: `http://localhost:3000/${value}` };
        return this.databaseService.t_User.update({
            where: { uid },
            data,
        });
    }
    remove(id) {
        return `This action removes a #${id} upload`;
    }
    async saveFile(uid, file) {
        try {
            const filePath = path.join(process.cwd(), 'public', file.originalname);
            await fs.promises.writeFile(filePath, file.buffer);
            return file.originalname;
        }
        catch (error) {
            return error.message;
        }
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UploadService);
//# sourceMappingURL=upload.service.js.map