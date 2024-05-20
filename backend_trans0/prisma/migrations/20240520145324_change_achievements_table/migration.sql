/*
  Warnings:

  - You are about to drop the column `choosed` on the `UserAchievement` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `UserAchievement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserAchievement" DROP COLUMN "choosed",
DROP COLUMN "date",
ADD COLUMN     "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
