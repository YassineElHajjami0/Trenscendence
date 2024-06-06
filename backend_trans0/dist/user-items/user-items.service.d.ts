import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class UserItemsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createUserItemDto: Prisma.UserItemCreateInput): Promise<{
        userId: number;
        itemId: number;
        choosed: boolean;
    }>;
    findAll(): Promise<{
        userId: number;
        itemId: number;
        choosed: boolean;
    }[]>;
    findUserItems(userId: number): Promise<{
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
    findOne(id: number): Promise<{
        userId: number;
        itemId: number;
        choosed: boolean;
    }[]>;
    updateOldItem(updateUserItemDto: any): Promise<{
        userId: number;
        itemId: number;
        choosed: boolean;
    }>;
    update(updateUserItemDto: any): Promise<void>;
    updateToFalse(updateUserItemDto: any): Promise<Prisma.BatchPayload>;
    remove(id: number): Promise<{
        userId: number;
        itemId: number;
        choosed: boolean;
    }>;
}
