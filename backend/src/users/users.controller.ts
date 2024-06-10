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
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-User.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from '../auth/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Public()
  @Get()
  findAll(@Query('order_by') order_by: string) {
    if (order_by === 'win') {
      console.log('ORDER_BY ', order_by);
      return this.usersService.orderByAsc();
    }
    return this.usersService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @Public()
  @Get('/user/:username')
  findOneName(@Param('username') username: string) {
    return this.usersService.findOneName(username);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log('PATCH');
    return this.usersService.update(+id, updateUserDto);
  }
  @Patch('/status/:id')
  updateStatus(@Param('id') id: string, @Body() status: any) {
    return this.usersService.updateStatus(+id, status);
  }

  @Delete()
  delete() {
    return this.usersService.delete();
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  // 2FA
}
