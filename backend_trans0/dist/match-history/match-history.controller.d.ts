import { MatchHistoryService } from './match-history.service';
import { Prisma } from '@prisma/client';
export declare class MatchHistoryController {
    private readonly matchHistoryService;
    constructor(matchHistoryService: MatchHistoryService);
    create(createMatchHistoryDto: Prisma.MatchHistoryCreateInput): Promise<{
        id: number;
        createdAt: Date;
        winner: number;
        loser: number;
        winnerScore: number;
        loserScore: number;
        gameMode: import(".prisma/client").$Enums.GameMode;
        startAt: Date;
        endAt: Date;
    }>;
    findAll(id: string): Promise<{
        me: string;
        opponent: string;
        myScore: number;
        opponentScore: number;
        createdAt: Date;
        endAt: Date;
        startAt: Date;
        gameMode: import(".prisma/client").$Enums.GameMode;
        result: string;
    }[]> | Promise<{
        loserName: string;
        winnerName: string;
        winnerScore: number;
        loserScore: number;
        createdAt: Date;
        endAt: Date;
        startAt: Date;
        gameMode: import(".prisma/client").$Enums.GameMode;
        result: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        winner: number;
        loser: number;
        winnerScore: number;
        loserScore: number;
        gameMode: import(".prisma/client").$Enums.GameMode;
        startAt: Date;
        endAt: Date;
    }>;
    update(id: string, updateMatchHistoryDto: Prisma.MatchHistoryUpdateInput): Promise<{
        id: number;
        createdAt: Date;
        winner: number;
        loser: number;
        winnerScore: number;
        loserScore: number;
        gameMode: import(".prisma/client").$Enums.GameMode;
        startAt: Date;
        endAt: Date;
    }>;
    remove(id: string): Promise<string>;
}
