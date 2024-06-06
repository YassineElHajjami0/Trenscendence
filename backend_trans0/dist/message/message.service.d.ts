import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { messageDto } from './dto/messageDto';
import { ChatGateway } from 'src/chatSockets/chat.getway';
export declare class MessageService {
    private readonly databaseService;
    private readonly chatGateway;
    constructor(databaseService: DatabaseService, chatGateway: ChatGateway);
    create(createMessageDto: messageDto): Promise<void>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        userID: number;
        channelID: number;
        content: string;
        isBlocked: boolean;
        createdAT: Date;
    }[]>;
    findOne(id: number): Promise<({
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
    update(id: number, updateMessageDto: Prisma.MessageUpdateInput): string;
    remove(id: number): string;
}
