import { UserItemsService } from './user-items.service';
import { Prisma } from '@prisma/client';
export declare class UserItemsController {
    private readonly userItemsService;
    constructor(userItemsService: UserItemsService);
    create(createUserItemDto: Prisma.UserItemCreateInput): Promise<{
        userId: number;
        itemId: number;
        choosed: boolean;
    }>;
    findAll(userId: string): Promise<{
        userId: number;
        itemId: number;
        choosed: boolean;
    }[]> | Promise<{
        choosed: boolean;
        owned: boolean;
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        type: string;
        power: string;
    }[]>;
    findOne(id: string): Promise<{
        userId: number;
        itemId: number;
        choosed: boolean;
    }[]>;
    update(updateUserItemDto: Prisma.UserItemUpdateInput): Promise<void>;
    updateToFalse(updateUserItemDto: Prisma.UserItemUpdateInput): Promise<Prisma.BatchPayload>;
    remove(id: string): Promise<{
        userId: number;
        itemId: number;
        choosed: boolean;
    }>;
}
