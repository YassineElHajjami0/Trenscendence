import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { FriendDto } from './dto/friendDto';

@Injectable()
export class FriendsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createFriendDto: FriendDto) {
    const { user1Id, user2Id } = createFriendDto;
    const existingFriendship = await this.databaseService.userFriend.findFirst({
      where: {
        OR: [
          {
            user2Id: user2Id,
            user1Id: user1Id,
          },
          {
            user1Id: user1Id,
            user2Id: user2Id,
          },
        ],
      },
    });
    if (!existingFriendship)
      return this.databaseService.userFriend.create({ data: createFriendDto });
  }

  async findAll() {
    return this.databaseService.userFriend.findMany({});
  }

  async findOne(id: number) {
    const friends = await this.databaseService.userFriend.findMany({
      where: {
        OR: [{ user1Id: id }, { user2Id: id }],
        status: 'ACCEPTED',
      },
      include: {
        usersSendThem: true,
        usersSendMe: true,
      },
    });

    const allFriends = friends
      .map((friend) => {
        const friendData =
          friend.user1Id === id ? friend.usersSendMe : friend.usersSendThem;
        return {
          uid: friendData.uid,
          name: friendData.username,
          email: friendData.email,
          status: friendData.status,
          avatar: friendData.avatar,
          fsStatus: friend.status,
        };
      })
      .sort((a, b) => {
        const statusOrder = { online: 1, ingame: 2, offline: 3 };
        return statusOrder[a.status] - statusOrder[b.status];
      });

    return allFriends;
  }

  async findAllExceptFriends(userId: number) {
    const friends = await this.databaseService.userFriend.findMany({
      where: {
        OR: [{ user1Id: userId }, { user2Id: userId }],
        NOT: { status: 'PENDING' },
      },
      select: {
        user1Id: true,
        user2Id: true,
      },
    });

    const friendIds = friends.flatMap((friend) => [
      friend.user1Id,
      friend.user2Id,
    ]);
    friendIds.push(userId);

    const users = await this.databaseService.t_User.findMany({
      where: {
        NOT: {
          uid: {
            in: friendIds,
          },
        },
      },
    });

    return users;
  }

  async update(
    id: number,
    friendId: number,
    updateUserDto: Prisma.UserFriendUpdateInput,
  ) {
    return this.databaseService.userFriend.updateMany({
      where: {
        OR: [
          { user1Id: id, user2Id: friendId },
          { user1Id: friendId, user2Id: id },
        ],
      },
      data: { status: updateUserDto.status },
    });
  }

  async remove(id: number) {
    return this.databaseService.userFriend.deleteMany({
      where: {
        OR: [{ user1Id: id }, { user2Id: id }],
      },
    });
  }
}
