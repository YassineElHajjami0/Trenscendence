import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class NotificationsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createNotificationDto: Prisma.NotificationCreateInput): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        userId: number;
    }>;
    findAll(): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        userId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        userId: number;
    }>;
    update(id: number, updateNotificationDto: Prisma.NotificationUpdateInput): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        userId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        userId: number;
    }>;
}
