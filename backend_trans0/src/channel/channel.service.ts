import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { ChannelDto } from './dto/channelDto';

@Injectable()
export class ChannelService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createDM(createChannelDto: ChannelDto) {
    const { name, topic, ...rest } = createChannelDto;
    const data = { name, topic };
    const checkChannel = await this.databaseService.channel.findFirst({
      where: {
        AND: [
          { type: 'DM' },
          {
            roles: {
              some: { userID: rest.id },
            },
          },
          {
            roles: {
              some: { userID: rest.friendId },
            },
          },
        ],
      },
    });
    if (checkChannel) return checkChannel.id;

    const channel = await this.databaseService.channel.create({ data: data });
    if (channel) {
      await this.databaseService.role.createMany({
        data: [
          {
            channelID: channel.id,
            userID: rest.id,
          },
          {
            channelID: channel.id,
            userID: rest.friendId,
          },
        ],
      });
      
      return channel.id;
    }
  }

  findAll() {
    return this.databaseService.channel.findMany({
      include: {
        roles: {
          select: {
            user: {
              select: {
                uid: true,
                status: true,
                username: true,
                email: true,
                bio: true,
                avatar: true,
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const channel = await this.databaseService.channel.findUnique({
      where: { id: id },
      include: {
        roles: {
          select: {
            user: {
              select: {
                uid: true,
                status: true,
                username: true,
                email: true,
                bio: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    const newRoles = channel.roles.map((user) => {
      return user.user;
    });

    return { ...channel, roles: newRoles };
  }

  update(id: number, updateChannelDto: Prisma.ChannelUpdateInput) {
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
