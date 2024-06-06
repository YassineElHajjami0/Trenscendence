import { Prisma } from '@prisma/client';
import { ChatGateway } from 'src/chatSockets/chat.getway';
import { DatabaseService } from 'src/database/database.service';
export declare class NotificationsService {
    private readonly databaseService;
    private readonly chatGateway;
    constructor(databaseService: DatabaseService, chatGateway: ChatGateway);
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
    findOne(id: number): Promise<({
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
    update(id: number, updateNotificationDto: Prisma.NotificationUpdateInput): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.NotificationType;
        content: string;
        createdAt: Date;
        read: boolean;
        ruserId: number;
        suserId: number;
        chnnelId: number;
    }>;
    remove(id: number): Promise<void>;
}
