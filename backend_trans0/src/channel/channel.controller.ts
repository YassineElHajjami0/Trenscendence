import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChannelService } from './channel.service';
// import { Prisma } from '@prisma/client';
import { ChannelDto } from './dto/channelDto';

@Controller('channels')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Post('/dm')
  create(@Body() createChannelDto: ChannelDto) {
    return this.channelService.createDM(createChannelDto);
  }

  @Get()
  findAll() {
    return this.channelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.channelService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateChannelDto: Prisma.ChannelUpdateInput) {
  //   return this.channelService.update(+id, updateChannelDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channelService.remove(+id);
  }
}
