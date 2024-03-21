import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class FriendsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createFriendDto: Prisma.UserFriendCreateInput): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }>;
    findAll(): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }[]>;
    findOne(id: number): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }>;
    update(id: number, updateUserDto: Prisma.UserFriendUpdateInput): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }>;
    remove(id: number): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }>;
}
