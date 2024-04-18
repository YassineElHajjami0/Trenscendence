import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createUserItemDto: Prisma.UserItemCreateInput) {
    // if (createUserItemDto) return 'This action adds a new userItem';
    return this.databaseService.userItem.create({ data: createUserItemDto });
  }

  findAll() {
    return this.databaseService.userItem.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.userItem.findMany({ where: { userId: id } });
  }

  update(id: number, updateUserItemDto: Prisma.UserItemUpdateInput) {
    if (updateUserItemDto) return `This action updates a #${id} userItem`;
  }

  remove(id: number) {
    return this.databaseService.userItem.delete({
      where: { userId_itemId: { userId: id, itemId: id } },
    });
  }
}
