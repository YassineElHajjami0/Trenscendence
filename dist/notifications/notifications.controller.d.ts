import { NotificationsService } from './notifications.service';
import { Prisma } from '@prisma/client';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
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
    findOne(id: string): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        userId: number;
    }>;
    update(id: string, updateNotificationDto: Prisma.NotificationUpdateInput): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        userId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        userId: number;
    }>;
}
