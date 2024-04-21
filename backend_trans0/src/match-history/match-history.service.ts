import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MatchHistoryService {
  constructor(private databaseService: DatabaseService) {}

  async create(createMatchHistoryDto: Prisma.MatchHistoryCreateInput) {
    console.log('datat ', createMatchHistoryDto);
    const matchHistory = await this.databaseService.matchHistory.create({
      data: createMatchHistoryDto,
    });
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

  async findOne(id: number) {
    const match = await this.databaseService.matchHistory.findUnique({
      where: { id },
    });
    return match;
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
