import { ItemsService } from './items.service';
import { Prisma } from '@prisma/client';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
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
    findOne(id: string): Promise<{
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        is_avatar: boolean;
        power: string;
    }>;
    update(id: string, updateItemDto: Prisma.ItemUpdateInput): Promise<{
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        is_avatar: boolean;
        power: string;
    }>;
    remove(id: string): Prisma.Prisma__ItemClient<{
        id: number;
        img: string;
        name: string;
        description: string;
        price: number;
        is_avatar: boolean;
        power: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
