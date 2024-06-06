import { FriendsService } from './friends.service';
import { Prisma } from '@prisma/client';
import { FriendDto } from './dto/friendDto';
export declare class FriendsController {
    private readonly friendsService;
    constructor(friendsService: FriendsService);
    create(createFriendDto: FriendDto): Promise<void>;
    findAll(): Promise<{
        user1Id: number;
        user2Id: number;
        status: import(".prisma/client").$Enums.Status;
    }[]>;
    findOne(id: string): Promise<{
        uid: number;
        username: string;
        email: string;
        status: string;
        avatar: string;
        fsStatus: import(".prisma/client").$Enums.Status;
    }[]>;
    findAllExceptFriends(id: string): Promise<({
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
    findIfFriend(id: number, friendId: number): Promise<boolean>;
    update(id: string, friendId: number, updateFriendDto: Prisma.UserFriendUpdateInput): Promise<Prisma.BatchPayload>;
    remove(id: string): Promise<Prisma.BatchPayload>;
}
