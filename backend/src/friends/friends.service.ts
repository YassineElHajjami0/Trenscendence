import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FriendsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createFriendDto: Prisma.UserFriendCreateInput) {
    return this.databaseService.userFriend.create({ data: createFriendDto });
  }

  async findAll() {
    return this.databaseService.userFriend.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.userFriend.findFirst({
      where: { user1Id: id },
    });
  }

  async update(id: number, updateUserDto: Prisma.UserFriendUpdateInput) {
    return this.databaseService.userFriend.update({
      where: {
        user1Id_user2Id: {
          user1Id: id,
          user2Id: id,
        },
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.userFriend.delete({
      where: {
        user1Id_user2Id: {
          user1Id: id,
          user2Id: id,
        },
      },
    });
  }
}
