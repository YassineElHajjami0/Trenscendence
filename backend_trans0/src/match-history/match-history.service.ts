import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MatchHistoryService {
  constructor(private databaseService: DatabaseService) {}
  async create(createMatchHistoryDto: Prisma.MatchHistoryCreateInput) {
    const matchHistory = await this.databaseService.matchHistory.create({
      data: createMatchHistoryDto,
    });
    return matchHistory;
  }

  async findAll() {
    const matches = await this.databaseService.matchHistory.findMany();
    return matches;
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
