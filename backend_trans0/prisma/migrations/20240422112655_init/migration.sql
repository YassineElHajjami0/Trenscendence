/*
  Warnings:

  - You are about to drop the column `avatar` on the `T_User` table. All the data in the column will be lost.
  - You are about to drop the column `unlocked` on the `UserItem` table. All the data in the column will be lost.
  - Added the required column `wallet` to the `T_User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "T_User" DROP COLUMN "avatar",
ADD COLUMN     "wallet" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserItem" DROP COLUMN "unlocked";
