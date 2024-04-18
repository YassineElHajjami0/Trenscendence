import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-User.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  // Without<T_UserUncheckedCreateInput
  async create(createUserDto: CreateUserDto) {
    // Handling error globally without putting the uggly try/catch everyWhere
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    try {
      const user = await this.databaseService.t_User.create({
        data: createUserDto,
      });
      // console.log(createUserDto);
      return user;
    } catch (err: any) {
      return err.message;
    }
  }

  async findAll() {
    const users = await this.databaseService.t_User.findMany({});
    return users;
  }

  async findOne(uid: number) {
    const user = await this.databaseService.t_User.findFirst({
      where: { uid },
      /*
      relationLoadStrategy: 'join',
      include: {
        userAchievements: {
          select: {
            achievement: true,
            date: true,
            unlocked: true,
            choosed: true,
          },
        },
        userItems: {
          select: {
            item: true,
            unlocked: true,
            choosed: true,
          },
        },
        usersSendThem: {
          select: {
            usersSendMe: {
              select: {
                username: true,
                email: true,
                bio: true,
                choosedProfileImage: true,
              },
            },
          },
        },
        usersSendMe: {
          select: {
            usersSendThem: {
              select: {
                username: true,
                email: true,
                bio: true,
                choosedProfileImage: true,
              },
            },
          },
        },
        winMatches: true,
        loseMatches: true,
      },*/
    });
    return user;
    /*
    if (!user) {
      return {};
    }
    const modifiedAchievements = user.userAchievements.map((achievement) => ({
      name: achievement.achievement.name,
      description: achievement.achievement.description,
      uri: achievement.achievement.uri,
      date: achievement.date,
      unlocked: achievement.unlocked,
      choosed: achievement.choosed,
    }));

    const modifiedAvatarsAndPaddles = user.userItems.map(
      (avatarsAndPaddle) => ({
        id: avatarsAndPaddle.item.id,
        [avatarsAndPaddle.item.is_avatar === true ? 'avatar' : 'paddle']:
          avatarsAndPaddle.item.img,
        name: avatarsAndPaddle.item.name,
        description: avatarsAndPaddle.item.description,
        price: avatarsAndPaddle.item.price,
        unlocked: avatarsAndPaddle.unlocked,
        power: avatarsAndPaddle.item.power,
        choosed: avatarsAndPaddle.choosed,
      }),
    );

    const friends = [];

    user.usersSendThem.forEach((friendship) => {
      friends.push(friendship.usersSendMe);
    });

    user.usersSendMe.forEach((friendship) => {
      friends.push(friendship.usersSendThem);
    });

    const { usersSendThem, usersSendMe, ...modifiedUser } = user;
    return {
      ...modifiedUser,
      achievements: modifiedAchievements,
      avatarsAndPaddles: modifiedAvatarsAndPaddles,
      user_friends: [...friends, ...friends2],
    };*/
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

  async findUser(email: string, password: string) {
    console.log('=========', email);

    const user = await this.databaseService.t_User.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) return null;
    if (user.password === password) return user;
    else return null;
  }

  async update(uid: number, updateUserDto: UpdateUserDto) {
    console.log('im heeeere--->', updateUserDto);
    if (updateUserDto.password)
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    return this.databaseService.t_User.update({
      where: { uid },
      data: updateUserDto,
    });
  }

  async remove(uid: number) {
    return this.databaseService.t_User.delete({ where: { uid } });
  }
}
