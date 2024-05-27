import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserItemsService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createUserItemDto: Prisma.UserItemCreateInput) {
    return this.databaseService.userItem.create({ data: createUserItemDto });
  }

  async findAll() {
    return this.databaseService.userItem.findMany({});
  }

  async findUserItems(userId: number) {
    const userItems = await this.databaseService.userItem.findMany({
      where: {
        userId: userId,
      },
      select: {
        itemId: true,
        choosed: true,
      },
    });
    const userItemsId = userItems.map((item) => item.itemId);
    const allItems = await this.databaseService.item.findMany();
    const allItemsModified = allItems.map((item) => {
      const newItem = { ...item, choosed: false, owned: false };
      const index = userItemsId.indexOf(item.id);
      if (index != -1) {
        newItem.owned = true;
        newItem.choosed = userItems[index].choosed; // not always false
      }
      return newItem;
    });
    return allItemsModified;
  }

  async findOne(id: number) {
    return this.databaseService.userItem.findMany({ where: { userId: id } });
  }

  async updateOldItem(updateUserItemDto: any) {
    const ids: Prisma.UserItemUserIdItemIdCompoundUniqueInput = {
      userId: updateUserItemDto.userId,
      itemId: updateUserItemDto.oldId,
    };
    return this.databaseService.userItem.update({
      where: { userId_itemId: ids },
      data: { choosed: false },
    });
  }

  async update(updateUserItemDto: any) {
    console.log(updateUserItemDto);
    const ids: Prisma.UserItemUserIdItemIdCompoundUniqueInput = {
      userId: updateUserItemDto.userId,
      itemId: updateUserItemDto.itemId,
    };
    if (updateUserItemDto.oldType == updateUserItemDto.type) {
      await this.updateOldItem(updateUserItemDto);
    }
    await this.databaseService.userItem.update({
      where: { userId_itemId: ids },
      data: { choosed: updateUserItemDto.choosed },
    });

    if (updateUserItemDto.type == 'avatar' && updateUserItemDto.avatar) {
      await this.databaseService.t_User.update({
        where: { uid: updateUserItemDto.userId },
        data: { avatar: updateUserItemDto.avatar },
      });
    }
  }

  async updateToFalse(updateUserItemDto: any) {
    const userId = updateUserItemDto.userId;
    return await this.databaseService.userItem.updateMany({
      where: { userId },
      data: { choosed: false },
    });
  }

  async remove(id: number) {
    return this.databaseService.userItem.delete({
      where: { userId_itemId: { userId: id, itemId: id } },
    });
  }
}
