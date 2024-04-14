/*
  Warnings:

  - You are about to drop the column `admins` on the `Channel` table. All the data in the column will be lost.
  - You are about to drop the column `members` on the `Channel` table. All the data in the column will be lost.
  - You are about to drop the column `owner` on the `Channel` table. All the data in the column will be lost.
  - You are about to drop the column `t_UserUid` on the `Channel` table. All the data in the column will be lost.
  - You are about to drop the column `channel_id` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `channel_id` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Role` table. All the data in the column will be lost.
  - Added the required column `channelID` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `channelID` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_t_UserUid_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_channel_id_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_channel_id_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_user_id_fkey";

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "admins",
DROP COLUMN "members",
DROP COLUMN "owner",
DROP COLUMN "t_UserUid";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "channel_id",
DROP COLUMN "created_at",
DROP COLUMN "user_id",
ADD COLUMN     "channelID" INTEGER NOT NULL,
ADD COLUMN     "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "channel_id",
DROP COLUMN "user_id",
ADD COLUMN     "channelID" INTEGER NOT NULL,
ADD COLUMN     "userID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userID_fkey" FOREIGN KEY ("userID") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_channelID_fkey" FOREIGN KEY ("channelID") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_channelID_fkey" FOREIGN KEY ("channelID") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_userID_fkey" FOREIGN KEY ("userID") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
