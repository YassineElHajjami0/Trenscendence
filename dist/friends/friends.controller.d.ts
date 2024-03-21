import { FriendsService } from './friends.service';
import { Prisma } from '@prisma/client';
export declare class FriendsController {
    private readonly friendsService;
    constructor(friendsService: FriendsService);
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
    findOne(id: string): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }>;
    update(id: string, updateFriendDto: Prisma.UserFriendUpdateInput): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }>;
    remove(id: string): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }>;
}
