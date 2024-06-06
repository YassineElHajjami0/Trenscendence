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
exports.MatchHistoryService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let MatchHistoryService = class MatchHistoryService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createMatchHistoryDto) {
        console.log('datat ', createMatchHistoryDto);
        const matchHistory = await this.databaseService.matchHistory.create({
            data: createMatchHistoryDto,
        });
        return matchHistory;
    }
    async findAll() {
        const matches = await this.databaseService.matchHistory.findMany({
            select: {
                winnerUser: {
                    select: {
                        username: true,
                    },
                },
                loserUser: {
                    select: {
                        username: true,
                    },
                },
                winnerScore: true,
                loserScore: true,
                createdAt: true,
                endAt: true,
                startAt: true,
                gameMode: true,
            },
        });
        const matches_two = matches.map((match) => {
            console.log(match);
            return {
                loserName: match.loserUser.username,
                winnerName: match.winnerUser.username,
                winnerScore: match.winnerScore,
                loserScore: match.loserScore,
                createdAt: match.createdAt,
                endAt: match.endAt,
                startAt: match.startAt,
                gameMode: match.gameMode,
                result: 'WIN',
            };
        });
        return matches_two;
    }
    async findMatchOfUser(userId) {
        const matchesOfUser = await this.databaseService.matchHistory.findMany({
            select: {
                winnerUser: {
                    select: {
                        username: true,
                        uid: true,
                    },
                },
                loserUser: {
                    select: {
                        username: true,
                        uid: true,
                    },
                },
                winnerScore: true,
                loserScore: true,
                createdAt: true,
                endAt: true,
                startAt: true,
                gameMode: true,
            },
            where: {
                OR: [
                    {
                        winnerUser: {
                            uid: userId,
                        },
                    },
                    {
                        loserUser: {
                            uid: userId,
                        },
                    },
                ],
            },
        });
        const matches_two = matchesOfUser.map((match) => {
            let me;
            let opponent;
            let myScore;
            let opponentScore;
            let result;
            if (match.loserUser.uid == userId) {
                me = match.loserUser.username;
                opponent = match.winnerUser.username;
                result = 'LOSE';
                myScore = match.loserScore;
                opponentScore = match.winnerScore;
            }
            else {
                me = match.winnerUser.username;
                opponent = match.loserUser.username;
                result = 'WIN';
                myScore = match.winnerScore;
                opponentScore = match.loserScore;
            }
            return {
                me: me,
                opponent: opponent,
                myScore: myScore,
                opponentScore: opponentScore,
                createdAt: match.createdAt,
                endAt: match.endAt,
                startAt: match.startAt,
                gameMode: match.gameMode,
                result: result,
            };
        });
        return matches_two;
    }
    async findOne(id) {
        const match = await this.databaseService.matchHistory.findUnique({
            where: { id },
        });
        return match;
    }
    async update(id, updateMatchHistoryDto) {
        const updated = await this.databaseService.matchHistory.update({
            where: { id },
            data: updateMatchHistoryDto,
        });
        return updated;
    }
    async remove(id) {
        await this.databaseService.matchHistory.delete({ where: { id } });
        return `Deleted`;
    }
};
exports.MatchHistoryService = MatchHistoryService;
exports.MatchHistoryService = MatchHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], MatchHistoryService);
//# sourceMappingURL=match-history.service.js.map