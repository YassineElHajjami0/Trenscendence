import { ChannelService } from './channel.service';
import { Prisma } from '@prisma/client';
import { ChannelDto, updateChannelDto } from './dto/channelDto';
export declare class ChannelController {
    private readonly channelService;
    constructor(channelService: ChannelService);
    create(createChannelDto: ChannelDto): Promise<void>;
    findMyFriends(id: string): Promise<any[]>;
    findAll(): Prisma.PrismaPromise<({
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
    findOne(id: string): Promise<{
        id: number;
        roles: any[];
        lastMSG: string;
        sendAT: Date;
    }>;
    updateDM(updateChannelDto: updateChannelDto): Promise<{
        id: number;
        channelID: number;
        userID: number;
        blocked: boolean;
        role: import(".prisma/client").$Enums.roles;
        mutedSince: Date;
        condition: import(".prisma/client").$Enums.conditions;
        updatedAt: Date;
    }>;
    remove(id: string): string;
}
