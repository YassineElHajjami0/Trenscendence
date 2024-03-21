/*
  Warnings:

  - The primary key for the `UserFriend` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `friendWithMeId` on the `UserFriend` table. All the data in the column will be lost.
  - Added the required column `userId` to the `UserFriend` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserFriend" DROP CONSTRAINT "UserFriend_friendWithMeId_fkey";

-- AlterTable
ALTER TABLE "UserFriend" DROP CONSTRAINT "UserFriend_pkey",
DROP COLUMN "friendWithMeId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "UserFriend_pkey" PRIMARY KEY ("userId", "friendId");

-- AddForeignKey
ALTER TABLE "UserFriend" ADD CONSTRAINT "UserFriend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "T_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
