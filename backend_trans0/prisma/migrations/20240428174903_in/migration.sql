/*
  Warnings:

  - You are about to drop the column `uploadedAvatar` on the `T_User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "T_User" DROP COLUMN "uploadedAvatar",
ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT '';
