import { MessageService } from './message.service';
import { Prisma } from '@prisma/client';
import { messageDto } from './dto/messageDto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(createMessageDto: messageDto): Promise<void>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        userID: number;
        channelID: number;
        content: string;
        isBlocked: boolean;
        createdAT: Date;
    }[]>;
    findOne(id: string): Promise<({
        users: {
            avatar: string;
        };
    } & {
        id: number;
        userID: number;
        channelID: number;
        content: string;
        isBlocked: boolean;
        createdAT: Date;
    })[]>;
    update(id: string, updateMessageDto: Prisma.MessageUpdateInput): string;
    remove(id: string): string;
}
