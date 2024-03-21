import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AchievementsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAchievementDto: Prisma.AchievementCreateInput) {
    return this.databaseService.achievement.create({
      data: createAchievementDto,
    });
  }

  async findAll() {
    return this.databaseService.achievement.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.achievement.findFirst({
      where: { id },
    });
  }

  async update(
    id: number,
    updateAchievementDto: Prisma.AchievementUpdateInput,
  ) {
    return this.databaseService.achievement.update({
      where: { id },
      data: updateAchievementDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.achievement.delete({
      where: { id },
    });
  }
}
