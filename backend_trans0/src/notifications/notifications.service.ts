import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ChatGateway } from 'src/chatSockets/chat.getway';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly chatGateway: ChatGateway,
  ) {}

  async create(createNotificationDto: Prisma.NotificationUncheckedCreateInput) {
    const getNotificatons = await this.databaseService.notification.findMany({
      where: {
        ruserId: createNotificationDto.ruserId,
        suserId: createNotificationDto.suserId,
      },
    });

    if (getNotificatons.length > 0) return;
    const notification = await this.databaseService.notification.create({
      data: createNotificationDto,
      include: { suser: true },
    });
    console.log('------------->>>>>>', notification);
    this.chatGateway.sendNotification(createNotificationDto);
  }

  async findAll() {
    return this.databaseService.notification.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.notification.findMany({
      where: { ruserId: id, read: false },
      include: { suser: true },
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
