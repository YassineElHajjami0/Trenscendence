import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { FriendDto } from './dto/friendDto';
import { ChatGateway } from 'src/chatSockets/chat.getway';
import { ChannelService } from 'src/channel/channel.service';
export declare class FriendsService {
    private readonly databaseService;
    private readonly chatGateway;
    private readonly channelService;
    constructor(databaseService: DatabaseService, chatGateway: ChatGateway, channelService: ChannelService);
    create(createFriendDto: FriendDto): Promise<void>;
    findAll(): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }[]>;
    getChoosedAvatarOfUser(uid: number): Promise<string>;
    findOne(id: number): Promise<{
        uid: number;
        username: string;
        email: string;
        status: string;
        avatar: string;
        fsStatus: import(".prisma/client").$Enums.Status;
    }[]>;
    findIfFriedn(user1Id: number, user2Id: number): Promise<boolean>;
    findAllExceptFriends(userId: number): Promise<({
        userItems: {
            userId: number;
            itemId: number;
            choosed: boolean;
        }[];
    } & {
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
    })[]>;
    update(id: number, friendId: number, updateUserDto: Prisma.UserFriendUpdateInput): Promise<Prisma.BatchPayload>;
    remove(id: number): Promise<Prisma.BatchPayload>;
}
