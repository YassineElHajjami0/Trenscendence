import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { ChannelDto, updateChannelDto } from './dto/channelDto';
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
        type: 'DM',
        roles: {
          every: {
            userID: { in: [rest.id, rest.friendId] },
          },
        },
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
        blocked: res.roles[0].blocked,
        users: res.roles[0].user,
        lastMSG: res.messages[0]?.content || '',
        sendAT: res.messages[0]?.createdAT,
      };
    });
    this.chatGateway.updateFriendList(myFriends);

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

  async updateDM(body: updateChannelDto) {
    const checkChannel = await this.databaseService.role.findFirst({
      where: {
        channelID: body.channelID,
        userID: body.friendId,
      },
    });
    if (checkChannel) {
      await this.databaseService.role.update({
        where: { id: checkChannel.id },
        data: { blocked: body.blocked },
      });
    }
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
