import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createUserDto: Prisma.T_UserCreateInput) {
    return this.databaseService.t_User.create({ data: createUserDto });
  }

  async findAll() {
    const users = await this.databaseService.t_User.findMany({});
    return users;
  }

  async findOne(uid: number) {
    const user = await this.databaseService.t_User.findFirst({
      where: { uid },
      relationLoadStrategy: 'join',
      include: {
        achievements: {
          select: {
            achievement: true,
            date: true,
            unlocked: true,
            choosed: true,
          },
        },
        avatarsAndPaddles: {
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
              },
            },
          },
        },
        usersSendMe: {
          select: {
            usersSendThem: {
              select: {
                username: true,
              },
            },
          },
        },
      },
    });
    if (!user) {
      return {};
    }
    const modifiedAchievements = user.achievements.map((achievement) => ({
      name: achievement.achievement.name,
      description: achievement.achievement.description,
      uri: achievement.achievement.uri,
      date: achievement.date,
      unlocked: achievement.unlocked,
      choosed: achievement.choosed,
    }));

    const modifiedAvatarsAndPaddles = user.avatarsAndPaddles.map(
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

    const friends = user.usersSendMe.map((friend) => ({
      username: friend.usersSendThem.username,
    }));
    const friends2 = user.usersSendThem.map((friend) => ({
      username: friend.usersSendMe.username,
    }));

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { usersSendThem, usersSendMe, ...modifiedUser } = user;
    return {
      ...modifiedUser,
      achievements: modifiedAchievements,
      avatarsAndPaddles: modifiedAvatarsAndPaddles,
      friends: [...friends, ...friends2],
    };
  }

  async update(uid: number, updateUserDto: Prisma.T_UserUpdateInput) {
    return this.databaseService.t_User.update({
      where: { uid },
      data: updateUserDto,
    });
  }

  async remove(uid: number) {
    return this.databaseService.t_User.delete({ where: { uid } });
  }
}
