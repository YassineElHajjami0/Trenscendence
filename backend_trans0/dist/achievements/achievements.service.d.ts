import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class AchievementsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createAchievementDto: Prisma.AchievementCreateInput): Promise<{
        id: number;
        name: string;
        description: string;
        uri: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
        uri: string;
    }[]>;
    findOne(id: number): Promise<{
        userAchievements: {
            userId: number;
            achivementId: number;
            createdAT: Date;
            unlocked: boolean;
        }[];
        id: number;
        name: string;
        description: string;
        uri: string;
    }>;
    update(id: number, updateAchievementDto: Prisma.AchievementUpdateInput): Promise<{
        id: number;
        name: string;
        description: string;
        uri: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        uri: string;
    }>;
}
