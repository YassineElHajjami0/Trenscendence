import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createNotificationDto: Prisma.NotificationCreateInput) {
    return this.databaseService.notification.create({
      data: createNotificationDto,
    });
  }

  async findAll() {
    return this.databaseService.notification.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.notification.findFirst({
      where: { id },
    });
  }

  async update(
    id: number,
    updateNotificationDto: Prisma.NotificationUpdateInput,
  ) {
    return this.databaseService.notification.update({
      where: { id },
      data: updateNotificationDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.notification.delete({
      where: { id },
    });
  }
}
