import { AchievementsService } from './achievements.service';
import { Prisma } from '@prisma/client';
export declare class AchievementsController {
    private readonly achievementsService;
    constructor(achievementsService: AchievementsService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateAchievementDto: Prisma.AchievementUpdateInput): Promise<{
        id: number;
        name: string;
        description: string;
        uri: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        description: string;
        uri: string;
    }>;
}
