import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserItemsService } from './user-items.service';
import { Prisma } from '@prisma/client';

@Controller('useritems')
export class UserItemsController {
  constructor(private readonly userItemsService: UserItemsService) {}

  @Post()
  create(@Body() createUserItemDto: Prisma.UserItemCreateInput) {
    return this.userItemsService.create(createUserItemDto);
  }

  @Get()
  findAll(@Query('userId') userId: string) {
    if (userId) {
      return this.userItemsService.findUserItems(+userId);
    }
    return this.userItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserItemDto: Prisma.UserItemUpdateInput,
  ) {
    return this.userItemsService.update(+id, updateUserItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userItemsService.remove(+id);
  }
}
