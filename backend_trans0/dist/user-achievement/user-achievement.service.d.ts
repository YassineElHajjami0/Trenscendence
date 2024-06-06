import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class UserAchievementService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createUserAchievementDto: Prisma.UserAchievementUncheckedCreateInput): Prisma.Prisma__UserAchievementClient<{
        userId: number;
        achivementId: number;
        createdAT: Date;
        unlocked: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findOne(id: number): Promise<unknown>;
    findAll(): void;
    update(id: number, updateUserAchievementDto: Prisma.UserAchievementUpdateInput): string;
    remove(id: number): string;
}
