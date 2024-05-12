import { Injectable } from '@nestjs/common';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { DatabaseService } from 'src/database/database.service';
import * as fs from 'fs';
import * as path from 'path';
import { Prisma } from '@prisma/client';
import { ChatGateway } from '../chatSockets/chat.getway';

@Injectable()
export class ChannelsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly chatGateway: ChatGateway,
  ) {}

  async create(
    file: Express.Multer.File,
    createChannelDto: Prisma.ChannelCreateInput,
  ) {
    const filePath = path.join(process.cwd(), 'public', file.originalname);
    createChannelDto.uri = filePath;
    await fs.promises.writeFile(filePath, file.buffer);
    const imageName = path.basename(createChannelDto.uri);
    createChannelDto.uri = imageName;
    const createdChannel = await this.databaseService.channel.create({
      data: createChannelDto,
    });
    await this.databaseService.role.create({
      data: {
        channelID: createdChannel.id,
        userID: 1,
        role: 'OWNER',
      },
    });
    return 'This action adds a new channel';
  }

  findAll() {}

  async findOne(userID: number) {
    const roles = await this.databaseService.role.findMany({
      where: { userID },
      include: {
        channels: {
          include: { roles: true },
        },
      },
    });
    return roles;
  }

  async getRoles(channelId: number) {
    const roles = await this.databaseService.role.findMany({
      where: { channelID: channelId },
      include: { user: true },
    });
    console.log('ROLES:', roles);
    return roles;
  }

  async findMessages(channelId: number) {
    const users = await this.databaseService.role.findMany({
      where: { channelID: channelId },
      include: { user: true },
    });
    return users;
  }

  update(id: number, updateChannelDto: UpdateChannelDto) {
    console.log(updateChannelDto);
    return { data: `This action updates a #${id} channel` };
  }
  // return { data: `channel id : ${channelId} uid : ${userId}` };

  async makeAdmin(channelId: number, userId: number) {
    const result = await this.databaseService.role.updateMany({
      where: {
        channelID: channelId,
        userID: userId,
      },
      data: { role: 'ADMIN' },
    });
    const roles = await this.databaseService.role.findMany({
      where: { channelID: channelId },
      include: { user: true },
    });

    this.chatGateway.updateRoles(roles);
    return result;
  }
  async rmAdmin(channelId: number, userId: number) {
    const result = await this.databaseService.role.updateMany({
      where: {
        channelID: channelId,
        userID: userId,
      },
      data: { role: 'USER' },
    });
    const roles = await this.databaseService.role.findMany({
      where: { channelID: channelId },
      include: { user: true },
    });

    this.chatGateway.updateRoles(roles);
    return result;
  }
  async kick(channelId: number, userId: number) {
    const result = await this.databaseService.role.deleteMany({
      where: {
        channelID: channelId,
        userID: userId,
      },
    });
    const roles = await this.databaseService.role.findMany({
      where: { channelID: channelId },
      include: { user: true },
    });

    this.chatGateway.updateRoles(roles);
    return result;
  }
  async mute(channelId: number, userId: number) {
    const result = await this.databaseService.role.updateMany({
      where: {
        channelID: channelId,
        userID: userId,
      },
      data: { condition: 'MUTED' },
    });
    const roles = await this.databaseService.role.findMany({
      where: { channelID: channelId },
      include: { user: true },
    });

    this.chatGateway.updateRoles(roles);
    return result;
  }
  async block(channelId: number, userId: number) {
    const result = await this.databaseService.role.updateMany({
      where: {
        channelID: channelId,
        userID: userId,
      },
      data: { condition: 'BLOCKED', blockedSince: new Date() },
    });
    const roles = await this.databaseService.role.findMany({
      where: { channelID: channelId },
      include: { user: true },
    });

    this.chatGateway.updateRoles(roles);
    return result;
  }
  async rmblock(channelId: number, userId: number) {
    const result = await this.databaseService.role.updateMany({
      where: {
        channelID: channelId,
        userID: userId,
      },
      data: { condition: 'NORMAL', blockedSince: new Date() },
    });
    const roles = await this.databaseService.role.findMany({
      where: { channelID: channelId },
      include: { user: true },
    });
    this.chatGateway.updateRoles(roles);
    // this.chatGateway.updateMessagesAfterBlock();
    return result;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
