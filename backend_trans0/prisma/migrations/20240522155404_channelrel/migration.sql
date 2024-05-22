/*
  Warnings:

  - You are about to drop the column `t_UserUid` on the `Channel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_t_UserUid_fkey";

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "t_UserUid";
