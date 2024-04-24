/*
  Warnings:

  - You are about to drop the column `points` on the `T_User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "T_User" DROP COLUMN "points",
ADD COLUMN     "uploadedAvatar" TEXT NOT NULL DEFAULT '';
