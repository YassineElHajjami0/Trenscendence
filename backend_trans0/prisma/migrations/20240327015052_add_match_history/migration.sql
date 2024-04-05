/*
  Warnings:

  - You are about to drop the column `choosedBanner` on the `T_User` table. All the data in the column will be lost.
  - You are about to drop the column `choosedProfileImage` on the `T_User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "GameMode" AS ENUM ('MODE1', 'MODE2');

-- AlterTable
ALTER TABLE "T_User" DROP COLUMN "choosedBanner",
DROP COLUMN "choosedProfileImage",
ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT '/profile_image.jpeg',
ADD COLUMN     "banner" TEXT NOT NULL DEFAULT '/banner.jpeg';

-- CreateTable
CREATE TABLE "MatchHistory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "winner" INTEGER NOT NULL,
    "loser" INTEGER NOT NULL,
    "winnerScore" INTEGER NOT NULL,
    "loserScore" INTEGER NOT NULL,
    "gameMode" "GameMode" NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MatchHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MatchHistory" ADD CONSTRAINT "MatchHistory_winner_fkey" FOREIGN KEY ("winner") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchHistory" ADD CONSTRAINT "MatchHistory_loser_fkey" FOREIGN KEY ("loser") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
