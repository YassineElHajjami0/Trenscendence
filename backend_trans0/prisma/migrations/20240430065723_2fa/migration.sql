-- AlterTable
ALTER TABLE "T_User" ADD COLUMN     "paddle" TEXT NOT NULL DEFAULT '/defaultPaddle.png',
ADD COLUMN     "twoFASecret" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "avatar" SET DEFAULT '/default.png';
