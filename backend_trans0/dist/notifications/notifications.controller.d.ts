import { NotificationsService } from './notifications.service';
import { Prisma } from '@prisma/client';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createNotificationDto: Prisma.NotificationUncheckedCreateInput): Promise<{
        suser: {
            uid: number;
            status: string;
            username: string;
            email: string;
            bio: string;
            password: string;
            twoFA: boolean;
            avatar: string;
            paddle: string;
            banner: string;
            wallet: number;
            level: number;
            rank: string;
            win: number;
            lose: number;
            role: string;
            strategy: string;
            twoFASecret: string;
        };
    } & {
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        ruserId: number;
        suserId: number;
        chnnelId: number;
    }>;
    createChannelNotif(createNotificationDto: Prisma.NotificationUncheckedCreateInput): Promise<{
        suser: {
            uid: number;
            status: string;
            username: string;
            email: string;
            bio: string;
            password: string;
            twoFA: boolean;
            avatar: string;
            paddle: string;
            banner: string;
            wallet: number;
            level: number;
            rank: string;
            win: number;
            lose: number;
            role: string;
            strategy: string;
            twoFASecret: string;
        };
    } & {
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        ruserId: number;
        suserId: number;
        chnnelId: number;
    }>;
    findAll(): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        ruserId: number;
        suserId: number;
        chnnelId: number;
    }[]>;
    findOne(id: string): Promise<({
        suser: {
            uid: number;
            status: string;
            username: string;
            email: string;
            bio: string;
            password: string;
            twoFA: boolean;
            avatar: string;
            paddle: string;
            banner: string;
            wallet: number;
            level: number;
            rank: string;
            win: number;
            lose: number;
            role: string;
            strategy: string;
            twoFASecret: string;
        };
    } & {
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        ruserId: number;
        suserId: number;
        chnnelId: number;
    })[]>;
    update(id: string, updateNotificationDto: Prisma.NotificationUpdateInput): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        ruserId: number;
        suserId: number;
        chnnelId: number;
    }>;
    remove(id: string): Promise<void>;
}
