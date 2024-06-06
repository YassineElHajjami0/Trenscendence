import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class MatchHistoryService {
    private databaseService;
    constructor(databaseService: DatabaseService);
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
    findAll(): Promise<{
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
    findMatchOfUser(userId: number): Promise<{
        me: string;
        opponent: string;
        myScore: number;
        opponentScore: number;
        createdAt: Date;
        endAt: Date;
        startAt: Date;
        gameMode: import(".prisma/client").$Enums.GameMode;
        result: string;
    }[]>;
    findOne(id: number): Promise<{
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
    update(id: number, updateMatchHistoryDto: Prisma.MatchHistoryUpdateInput): Promise<{
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
    remove(id: number): Promise<string>;
}
