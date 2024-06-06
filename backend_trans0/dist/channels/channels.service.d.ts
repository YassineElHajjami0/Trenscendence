/// <reference types="multer" />
import { UpdateChannelDto } from './dto/update-channel.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { ChatGateway } from '../chatSockets/chat.getway';
export declare class ChannelsService {
    private readonly databaseService;
    private readonly chatGateway;
    constructor(databaseService: DatabaseService, chatGateway: ChatGateway);
    create(file: Express.Multer.File, createChannelDto: Prisma.ChannelCreateInput, userId: string): Promise<string>;
    findAll(text: string): Promise<{
        id: number;
        type: import(".prisma/client").$Enums.channelType;
        name: string;
        topic: string;
        uri: string;
        code: number;
    }[]>;
    findOne(userID: number): Promise<({
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
    getRoles(channelId: number): Promise<({
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
    findMessages(channelId: number): Promise<({
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
    update(id: number, updateChannelDto: UpdateChannelDto): {
        data: string;
    };
    makeAdmin(channelId: number, userId: number): Promise<Prisma.BatchPayload>;
    rmAdmin(channelId: number, userId: number): Promise<Prisma.BatchPayload>;
    joinPublic(channelID: number, userID: number): Promise<{
        id: number;
        channelID: number;
        userID: number;
        blocked: boolean;
        role: import(".prisma/client").$Enums.roles;
        mutedSince: Date;
        condition: import(".prisma/client").$Enums.conditions;
        updatedAt: Date;
    }>;
    kick(channelId: number, userId: number): Promise<Prisma.BatchPayload>;
    leave(channelId: number, userId: number): Promise<void>;
    mute(channelId: number, userId: number): Promise<Prisma.BatchPayload>;
    rmMute(channelId: number, userId: number): Promise<Prisma.BatchPayload>;
    block(channelId: number, userId: number): Promise<Prisma.BatchPayload>;
    rmblock(channelId: number, userId: number): Promise<Prisma.BatchPayload>;
    remove(id: number): string;
}
