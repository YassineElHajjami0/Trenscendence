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
exports.AchievementsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let AchievementsService = class AchievementsService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createAchievementDto) {
        return this.databaseService.achievement.create({
            data: createAchievementDto,
        });
    }
    async findAll() {
        return this.databaseService.achievement.findMany({});
    }
    async findOne(id) {
        return this.databaseService.achievement.findFirst({
            select: {
                id: true,
                name: true,
                description: true,
                uri: true,
                userAchievements: {
                    where: {
                        AND: {
                            userId: id,
                            unlocked: true,
                        },
                    },
                },
            },
        });
    }
    async update(id, updateAchievementDto) {
        return this.databaseService.achievement.update({
            where: { id },
            data: updateAchievementDto,
        });
    }
    async remove(id) {
        return this.databaseService.achievement.delete({
            where: { id },
        });
    }
};
exports.AchievementsService = AchievementsService;
exports.AchievementsService = AchievementsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AchievementsService);
//# sourceMappingURL=achievements.service.js.map