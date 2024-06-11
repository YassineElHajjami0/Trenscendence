import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-User.dto';
import { UserStatus } from '@prisma/client';
import { ChatGateway } from 'src/chatSockets/chat.getway';
import { MatchHistoryService } from 'src/match-history/match-history.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly chatGateway: ChatGateway,
    private readonly matchHistory: MatchHistoryService,
  ) {}

  async delete() {
    return this.databaseService.t_User.deleteMany({});
  }

  async validateUserId(uid: number) {
    const user = await this.findOne(uid);
    return user;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findUserByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Invalid Username');
    }
    const isMatch = await bcrypt.compare(pass, user?.password);
    if (isMatch) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid password');
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    try {
      const user = await this.databaseService.t_User.create({
        data: createUserDto,
      });
      return user;
    } catch (err: any) {
      throw new UnauthorizedException(
        `${err.meta?.target} cannot be duplicated`,
      );
    }
  }

  async findAll() {
    const users = await this.databaseService.t_User.findMany({});
    return users;
  }

  async orderByAsc() {
    const users = await this.databaseService.t_User.findMany();
    const updatedUsers = await Promise.all(users.map(async (user) => {
        const win = await this.matchHistory.findwinnedMatches(user.uid);
        const lose = await this.matchHistory.findLostMatches(user.uid);
        return {
          ...user,
          win: win.length,
          lose: lose.length,
        };
      }),
    );
    updatedUsers.sort((a, b) =>
      b.win - a.win ? b.win - a.win : a.lose - b.lose,
    );
    return updatedUsers;
  }
  async findOneName(username: string) {
    const user = await this.databaseService.t_User.findFirst({
      where: { username },
    });
    if (!user) {
      throw new HttpException('no Username', HttpStatus.NOT_FOUND);
    }
    return user;
  }
  async findOne(uid: number) {
    const user = await this.databaseService.t_User.findFirst({
      where: { uid },
    });
    if (user) {
      if (user.avatar == '') user.avatar = 'default.png';
      const finalUser = {
        ...user,
        oldPassword: '',
        newPassword: '',
        confirmedPassword: '',
      };

      return finalUser;
    }

    return user;
  }

  async findUserByUsername(username: string) {
    const user = await this.databaseService.t_User.findFirst({
      where: { username },
    });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.databaseService.t_User.findFirst({
      where: { email },
    });
    return user;
  }

  async update(uid: number, updateUserDto: UpdateUserDto) {
    if (
      updateUserDto.newPassword &&
      updateUserDto.confirmedPassword &&
      updateUserDto.oldPassword
    ) {
      const userInDb = await this.findOne(uid);

      const user = await this.validateUser(
        userInDb.username,
        updateUserDto.oldPassword,
      );
      if (!user) {
        throw new BadRequestException('Incorrect old password');
      }
      updateUserDto.password = await bcrypt.hash(updateUserDto.newPassword, 10);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { newPassword, oldPassword, confirmedPassword, ...result } =
        updateUserDto;
      return this.databaseService.t_User.update({
        where: { uid },
        data: result,
      });
    }
    return this.databaseService.t_User.update({
      where: { uid },
      data: updateUserDto,
    });
  }

  async updateStatus(uid: number, status: UserStatus) {
    const res = await this.databaseService.t_User.update({
      where: { uid },
      data: status,
    });
    this.chatGateway.updateFriendStatus(res);
  }

  async setTwoFaSecret(twoFASecret: string, uid: number) {
    this.update(uid, { twoFASecret });
  }

  async remove(uid: number) {
    return this.databaseService.t_User.delete({ where: { uid } });
  }

  async turnOnTwoFA(uid: number) {
    this.update(uid, { twoFA: true });
  }
}
