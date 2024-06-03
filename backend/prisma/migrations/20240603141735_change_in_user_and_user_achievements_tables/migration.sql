/*
  Warnings:

  - You are about to drop the column `level` on the `T_User` table. All the data in the column will be lost.
  - The `rank` column on the `T_User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UserAchievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `achivementId` on the `UserAchievement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Achievement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `achivementName` to the `UserAchievement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Ranks" AS ENUM ('Beginner', 'Intermediate', 'Expert', 'Master', 'Grandmaster', 'Apex');

-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_achivementId_fkey";

-- AlterTable
ALTER TABLE "T_User" DROP COLUMN "level",
ADD COLUMN     "xp" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "rank",
ADD COLUMN     "rank" "Ranks" NOT NULL DEFAULT 'Beginner';

-- AlterTable
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_pkey",
DROP COLUMN "achivementId",
ADD COLUMN     "achivementName" TEXT NOT NULL,
ADD CONSTRAINT "UserAchievement_pkey" PRIMARY KEY ("userId", "achivementName");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_name_key" ON "Achievement"("name");

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_achivementName_fkey" FOREIGN KEY ("achivementName") REFERENCES "Achievement"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
