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
exports.UserAchievementService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let UserAchievementService = class UserAchievementService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    create(createUserAchievementDto) {
        return this.databaseService.userAchievement.create({
            data: createUserAchievementDto,
        });
    }
    async findOne(id) {
        const res = await this.databaseService.$queryRaw `
      SELECT
        a.name,
        a.description,
        a.uri,
        ua."createdAT",
        COALESCE(ua.unlocked, false) as unlocked
      FROM
        "Achievement" a
      LEFT JOIN
      "UserAchievement" ua
      ON
        a.id = ua."achivementId" AND ua."userId" = ${id}
    `;
        return res;
    }
    findAll() {
        return;
    }
    update(id, updateUserAchievementDto) {
        return `This action updates a #${id} userAchievement`;
    }
    remove(id) {
        return `This action removes a #${id} userAchievement`;
    }
};
exports.UserAchievementService = UserAchievementService;
exports.UserAchievementService = UserAchievementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserAchievementService);
//# sourceMappingURL=user-achievement.service.js.map