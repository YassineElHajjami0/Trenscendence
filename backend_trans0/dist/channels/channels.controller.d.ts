/// <reference types="multer" />
import { ChannelsService } from './channels.service';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Prisma } from '@prisma/client';
export declare class ChannelsController {
    private readonly channelsService;
    constructor(channelsService: ChannelsService);
    create(files: Array<Express.Multer.File>, userId: string, createChannelDto: Prisma.ChannelCreateInput): Promise<string>;
    findAll(text: string): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.channelType;
        name: string;
        topic: string;
        uri: string;
        code: number;
    }[]>;
    findMessages(channelId: string): Promise<({
        user: {
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
        channelID: number;
        userID: number;
        blocked: boolean;
        role: import(".prisma/client").$Enums.roles;
        mutedSince: Date;
        condition: import(".prisma/client").$Enums.conditions;
        updatedAt: Date;
    })[]>;
    getRoles(channelId: string): Promise<({
        user: {
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
        channelID: number;
        userID: number;
        blocked: boolean;
        role: import(".prisma/client").$Enums.roles;
        mutedSince: Date;
        condition: import(".prisma/client").$Enums.conditions;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<({
        channels: {
            roles: {
                id: number;
                channelID: number;
                userID: number;
                blocked: boolean;
                role: import(".prisma/client").$Enums.roles;
                mutedSince: Date;
                condition: import(".prisma/client").$Enums.conditions;
                updatedAt: Date;
            }[];
        } & {
            id: number;
            type: import(".prisma/client").$Enums.channelType;
            name: string;
            topic: string;
            uri: string;
            code: number;
        };
    } & {
        id: number;
        channelID: number;
        userID: number;
        blocked: boolean;
        role: import(".prisma/client").$Enums.roles;
        mutedSince: Date;
        condition: import(".prisma/client").$Enums.conditions;
        updatedAt: Date;
    })[]>;
    makeAdmin(channelId: string, userId: string): Promise<Prisma.BatchPayload>;
    rmAdmin(channelId: string, userId: string): Promise<Prisma.BatchPayload>;
    joinPublic(channelId: string, userId: string): Promise<{
        id: number;
        channelID: number;
        userID: number;
        blocked: boolean;
        role: import(".prisma/client").$Enums.roles;
        mutedSince: Date;
        condition: import(".prisma/client").$Enums.conditions;
        updatedAt: Date;
    }>;
    Leave(channelId: string, userId: string): Promise<void>;
    kick(channelId: string, userId: string): Promise<Prisma.BatchPayload>;
    Mute(channelId: string, userId: string): Promise<Prisma.BatchPayload>;
    rmMute(channelId: string, userId: string): Promise<Prisma.BatchPayload>;
    Block(channelId: string, userId: string): Promise<Prisma.BatchPayload>;
    RmBlock(channelId: string, userId: string): Promise<Prisma.BatchPayload>;
    update(id: string, updateChannelDto: UpdateChannelDto): {
        data: string;
    };
    remove(id: string): string;
}
