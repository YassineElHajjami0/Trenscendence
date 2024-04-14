/*
  Warnings:

  - The primary key for the `Achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `Achievement` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_achivementId_fkey";

-- AlterTable
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_achivementId_fkey" FOREIGN KEY ("achivementId") REFERENCES "Achievement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
