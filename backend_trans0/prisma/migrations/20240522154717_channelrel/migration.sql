/*
  Warnings:

  - You are about to drop the column `userID` on the `Channel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_userID_fkey";

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "userID",
ADD COLUMN     "t_UserUid" INTEGER;

-- AddForeignKey
ALTER TABLE "Channel" ADD CONSTRAINT "Channel_t_UserUid_fkey" FOREIGN KEY ("t_UserUid") REFERENCES "T_User"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
