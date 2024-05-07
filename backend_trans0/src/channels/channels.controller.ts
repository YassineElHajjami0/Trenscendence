import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/decorators/public.decorator';
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

  // @Post()
  // @UseInterceptors(FileInterceptor('myFile'))
  // create(@UploadedFile() file, @Body() createChannelDto: CreateChannelDto) {
  //   console.log(file);
  //   return this.channelsService.create(createChannelDto);
  // }
  @Get()
  findAll() {
    return this.channelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
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

// import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';

// @Controller('upload-stack-overflow')
// export class UploadStackOverflowController {

//   @Post('upload')
//   @UseInterceptors(FileInterceptor('file'))
//   uploadSingleFileWithPost(@UploadedFile() file, @Body() body) {
//     console.log(file);
//     console.log(body.firstName);
//     console.log(body.favoriteColor);
//   }
// }
