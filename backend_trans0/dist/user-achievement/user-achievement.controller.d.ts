import { UserAchievementService } from './user-achievement.service';
import { Prisma } from '@prisma/client';
export declare class UserAchievementController {
    private readonly userAchievementService;
    constructor(userAchievementService: UserAchievementService);
    create(createUserAchievementDto: Prisma.UserAchievementUncheckedCreateInput): Prisma.Prisma__UserAchievementClient<{
        userId: number;
        achivementId: number;
        createdAT: Date;
        unlocked: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): void;
    findOne(id: string): Promise<unknown>;
    update(id: string, updateUserAchievementDto: Prisma.UserAchievementUpdateInput): string;
    remove(id: string): string;
}
