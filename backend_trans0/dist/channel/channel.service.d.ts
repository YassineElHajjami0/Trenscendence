import { DatabaseService } from 'src/database/database.service';
import { ChannelDto, updateChannelDto } from './dto/channelDto';
import { ChatGateway } from 'src/chatSockets/chat.getway';
export declare class ChannelService {
    private readonly databaseService;
    private readonly chatGateway;
    constructor(databaseService: DatabaseService, chatGateway: ChatGateway);
    createDM(createChannelDto: ChannelDto): Promise<void>;
    findOne(id: number): Promise<{
        id: number;
        roles: any[];
        lastMSG: string;
        sendAT: Date;
    }>;
    findMyFriends(id: number): Promise<any[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        roles: {
            user: {
                username: string;
                email: string;
                uid: number;
                status: string;
                bio: string;
            };
        }[];
    } & {
        id: number;
        type: import(".prisma/client").$Enums.channelType;
        name: string;
        topic: string;
        uri: string;
        code: number;
    })[]>;
    updateDM(body: updateChannelDto): Promise<{
        id: number;
        channelID: number;
        userID: number;
        blocked: boolean;
        role: import(".prisma/client").$Enums.roles;
        mutedSince: Date;
        condition: import(".prisma/client").$Enums.conditions;
        updatedAt: Date;
    }>;
    remove(id: number): string;
}
