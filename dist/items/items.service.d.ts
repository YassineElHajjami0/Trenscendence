import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ItemsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createItemDto: Prisma.ItemCreateInput): Promise<{
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        is_avatar: boolean;
        power: string;
    }>;
    findAll(): Promise<{
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        is_avatar: boolean;
        power: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        is_avatar: boolean;
        power: string;
    }>;
    update(id: number, updateItemDto: Prisma.ItemUpdateInput): Promise<{
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        is_avatar: boolean;
        power: string;
    }>;
    remove(id: number): Prisma.Prisma__ItemClient<{
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        is_avatar: boolean;
        power: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
