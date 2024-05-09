import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Query,
} from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Prisma } from '@prisma/client';

@Controller('channelss')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createChannelDto: Prisma.ChannelCreateInput,
  ) {
    return this.channelsService.create(files[0], createChannelDto);
  }

  @Get()
  findAll() {
    return this.channelsService.findAll();
  }
  @Get()
  findMessages(@Query('channelId') channelId: string) {
    console.log('here 000000000000000000');

    return this.channelsService.findOne(+channelId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('IM GOOD');
    return this.channelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChannelDto: UpdateChannelDto) {
    return this.channelsService.update(+id, updateChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channelsService.remove(+id);
  }
}
