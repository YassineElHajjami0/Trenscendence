import { Injectable } from '@nestjs/common';
import { CreateChannelDto } from './dto/create-channel.dto';
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
    await this.databaseService.channel.create({ data: createChannelDto });
    return 'This action adds a new channel';
  }

  findAll() {
    return `This action returns all channels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} channel`;
  }

  update(id: number, updateChannelDto: UpdateChannelDto) {
    console.log(updateChannelDto);
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
