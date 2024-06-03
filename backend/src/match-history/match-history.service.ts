import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { UserAchievementService } from 'src/user-achievement/user-achievement.service';

@Injectable()
export class MatchHistoryService {
  constructor(private databaseService: DatabaseService, private userAchievementService: UserAchievementService) {}

  async create(createMatchHistoryDto: Prisma.MatchHistoryCreateInput) {
    const matchHistory = await this.databaseService.matchHistory.create({
      data: createMatchHistoryDto,
    });

    const winnerMatchHistory = await this.findOne(matchHistory.winner) as any[] || [];
    const loserMatchHistory = await this.findOne(matchHistory.loser) as any[] || [];

    // await this.databaseService.userAchievement.create({
    //   data: {
    //     userId: matchHistory.winner,
    //     achivementName: 'First Win',
    //     createdAT: new Date(),
    //     unlocked: true,
    //   },
    // });

    if (winnerMatchHistory && winnerMatchHistory[0].win === 1) {
      await this.userAchievementService.create({
        userId: matchHistory.winner,
        achivementName: 'First Win',
        createdAT: new Date(),
        unlocked: true,
      });
    }
    if (loserMatchHistory && loserMatchHistory[0].lose === 1) {
      await this.userAchievementService.create({
        userId: matchHistory.loser,
        achivementName: 'First Defeat',
        createdAT: new Date(),
        unlocked: true,
      });
    }

    if (winnerMatchHistory && matchHistory.loserScore === 0) {
      await this.userAchievementService.create({
        userId: matchHistory.winner,
        achivementName: 'Flawless Victory',
        createdAT: new Date(),
        unlocked: true,
      });
    }

    if (winnerMatchHistory && winnerMatchHistory[0].win === 50) {
      await this.userAchievementService.create({
        userId: matchHistory.winner,
        achivementName: 'Ping Pong Pro',
        createdAT: new Date(),
        unlocked: true,
      });
    }

    const matchDurationInMinutes = (matchHistory.endAt.getTime() - matchHistory.startAt.getTime()) / 1000 / 60;
    if (matchDurationInMinutes >= 5) {
      await this.userAchievementService.create({
        userId: matchHistory.winner,
        achivementName: 'Marathon Match',
        createdAT: new Date(),
        unlocked: true,
      });
      await this.userAchievementService.create({
        userId: matchHistory.loser,
        achivementName: 'Marathon Match',
        createdAT: new Date(),
        unlocked: true,
      });
    }

    // log achievements for both players after adding them
    console.log(await this.userAchievementService.findOne(matchHistory.winner));
    console.log(await this.userAchievementService.findOne(matchHistory.loser));
    return matchHistory;
  }

  async findAll() {
    const matches = await this.databaseService.matchHistory.findMany({
      select: {
        winnerUser: {
          select: {
            username: true,
          },
        },
        loserUser: {
          select: {
            username: true,
          },
        },
        winnerScore: true,
        loserScore: true,
        createdAt: true,
        endAt: true,
        startAt: true,
        gameMode: true,
      },
    });
    const matches_two = matches.map((match) => {
      console.log(match);
      return {
        loserName: match.loserUser.username,
        winnerName: match.winnerUser.username,
        winnerScore: match.winnerScore,
        loserScore: match.loserScore,
        createdAt: match.createdAt,
        endAt: match.endAt,
        startAt: match.startAt,
        gameMode: match.gameMode,
        result: 'WIN',
      };
    });
    return matches_two;
  }

  async findMatchOfUser(userId: number) {
    const matchesOfUser = await this.databaseService.matchHistory.findMany({
      select: {
        winnerUser: {
          select: {
            username: true,
            uid: true,
          },
        },
        loserUser: {
          select: {
            username: true,
            uid: true,
          },
        },
        winnerScore: true,
        loserScore: true,
        createdAt: true,
        endAt: true,
        startAt: true,
        gameMode: true,
      },
      where: {
        OR: [
          {
            winnerUser: {
              uid: userId,
            },
          },
          {
            loserUser: {
              uid: userId,
            },
          },
        ],
      },
    });
    const matches_two = matchesOfUser.map((match) => {
      let me: string;
      let opponent: string;
      let myScore: number;
      let opponentScore: number;
      let result: string;
      if (match.loserUser.uid == userId) {
        me = match.loserUser.username;
        opponent = match.winnerUser.username;
        result = 'LOSE';
        myScore = match.loserScore;
        opponentScore = match.winnerScore;
      } else {
        me = match.winnerUser.username;
        opponent = match.loserUser.username;
        result = 'WIN';
        myScore = match.winnerScore;
        opponentScore = match.loserScore;
      }
      return {
        me: me,
        opponent: opponent,
        myScore: myScore,
        opponentScore: opponentScore,
        createdAt: match.createdAt,
        endAt: match.endAt,
        startAt: match.startAt,
        gameMode: match.gameMode,
        result: result,
      };
    });
    return matches_two;
  }

  async findOne(id: number) {
    const match = await this.databaseService.matchHistory.findMany({
      where: {
        OR: [
          {
            winner: id,
          },
          {
            loser: id,
          },
        ],
      },
    });

    if (!match || !match.length) return [];

    const groupedData = match.reduce((acc, item) => {
      const date = item.createdAt.toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = { date, win: 0, lose: 0, w_l: 0 };
      }
      if (id === item.winner) {
        acc[date].win++;
      } else if (id === item.loser) {
        acc[date].lose++;
      }
      acc[date].w_l = (
        (acc[date].win / (acc[date].win + acc[date].lose)) *
        100
      ).toExponential(2);
      return acc;
    }, {});

    return Object.values(groupedData);
  }

  async update(
    id: number,
    updateMatchHistoryDto: Prisma.MatchHistoryUpdateInput,
  ) {
    const updated = await this.databaseService.matchHistory.update({
      where: { id },
      data: updateMatchHistoryDto,
    });
    return updated;
  }

  async remove(id: number) {
    await this.databaseService.matchHistory.delete({ where: { id } });
    return `Deleted`;
  }
}
