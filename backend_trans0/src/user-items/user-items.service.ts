import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserItemDto: Prisma.UserItemCreateInput) {
    // if (createUserItemDto) return 'This action adds a new userItem';
    return this.databaseService.userItem.create({ data: createUserItemDto });
  }

  async findAll() {
    return this.databaseService.userItem.findMany({});
  }

  async findUserItems(userId: number) {
    console.log(userId);
    const userItems = await this.databaseService.userItem.findMany({
      select: {
        itemId: true,
      }
    });
    const userItemsId = userItems.map((item) => item.itemId);

    const allItems = await this.databaseService.item.findMany();
    const allItemsModified = allItems.map((item) => {
      const newItem = { ...item, choosed: false, unlocked: false };
      if (item.id in userItemsId) {
        newItem.unlocked = true;
        newItem.choosed = false; // not always false
      }
      return newItem;
    });
    return allItemsModified;
  }

  async findOne(id: number) {
    return this.databaseService.userItem.findMany({ where: { userId: id } });
  }

  async update(id: number, updateUserItemDto: Prisma.UserItemUpdateInput) {
    if (updateUserItemDto) return `This action updates a #${id} userItem`;
  }

  async remove(id: number) {
    return this.databaseService.userItem.delete({
      where: { userId_itemId: { userId: id, itemId: id } },
    });
  }
}
