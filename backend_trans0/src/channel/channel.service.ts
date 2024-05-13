import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { ChannelDto } from './dto/channelDto';
import { ChatGateway } from 'src/chatSockets/chat.getway';

@Injectable()
export class ChannelService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly chatGateway: ChatGateway,
  ) {}

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

    const channel = await this.databaseService.channel.create({
      data: data,
    });
    if (channel) {
      const roles = await this.databaseService.role.createMany({
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
      if (roles) this.findOne(channel.id);
    }
  }

  async findMyFriends(id: number) {
    const res = await this.databaseService.channel.findMany({
      where: {
        AND: [
          { type: 'DM' },
          {
            roles: {
              some: { userID: id },
            },
          },
        ],
      },
      include: {
        roles: {
          where: { NOT: { userID: id } },
          include: { user: true },
        },
        messages: { orderBy: { createdAT: 'desc' }, take: 1 },
      },
    });

    const myFriends = res.map((res) => {
      return {
        id: res.id,
        role: res.roles[0].role,
        users: res.roles[0].user,
        lastMSG: res.messages[0]?.content || '',
        sendAT: res.messages[0]?.createdAT,
      };
    });
    // this.chatGateway.updateFriendList(myFriends);

    return myFriends;
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
                // avatar: true,
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
          include: { user: true },
        },
        messages: { orderBy: { createdAT: 'desc' }, take: 1 },
      },
    });
    const myFriend = {
      id: channel.id,
      users: channel.roles.map((u) => {
        return u.user;
      }),
      lastMSG: channel.messages[0]?.content || '',
      sendAT: channel.messages[0]?.createdAT,
    };
    this.chatGateway.updateFriendList(myFriend);
  }

  update(id: number, updateChannelDto: Prisma.ChannelUpdateInput) {
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
