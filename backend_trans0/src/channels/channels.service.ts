import { Injectable } from '@nestjs/common';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { DatabaseService } from 'src/database/database.service';
import * as fs from 'fs';
import * as path from 'path';
import { Prisma } from '@prisma/client';

@Injectable()
export class ChannelsService {
  constructor(private readonly databaseService: DatabaseService) {}

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

  update(id: number, updateChannelDto: UpdateChannelDto) {
    console.log(updateChannelDto);
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
