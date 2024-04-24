import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserItemDto: Prisma.UserItemCreateInput) {
    return this.databaseService.userItem.create({ data: createUserItemDto });
  }

  async findAll() {
    return this.databaseService.userItem.findMany({});
  }

  async findUserItems(userId: number) {
    // console.log(userId);
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

  async updateOthers(body: any) {
    const userItems = await this.databaseService.userItem.updateMany({
      where: { userId: body.userId },
      data: { choosed: false },
    });
    return userItems;
  }

  async update(updateUserItemDto: any) {
    const body: Prisma.UserItemUserIdItemIdCompoundUniqueInput = {
      userId: updateUserItemDto.userId,
      itemId: updateUserItemDto.itemId,
    };
    await this.updateOthers(body);
    return this.databaseService.userItem.update({
      where: { userId_itemId: body },
      data: updateUserItemDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.userItem.delete({
      where: { userId_itemId: { userId: id, itemId: id } },
    });
  }
}
