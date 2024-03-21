/*
  Warnings:

  - The primary key for the `UserFriend` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `friendId` on the `UserFriend` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserFriend` table. All the data in the column will be lost.
  - Added the required column `user1Id` to the `UserFriend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user2Id` to the `UserFriend` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserFriend" DROP CONSTRAINT "UserFriend_friendId_fkey";

-- DropForeignKey
ALTER TABLE "UserFriend" DROP CONSTRAINT "UserFriend_userId_fkey";

-- AlterTable
ALTER TABLE "UserFriend" DROP CONSTRAINT "UserFriend_pkey",
DROP COLUMN "friendId",
DROP COLUMN "userId",
ADD COLUMN     "user1Id" INTEGER NOT NULL,
ADD COLUMN     "user2Id" INTEGER NOT NULL,
ADD CONSTRAINT "UserFriend_pkey" PRIMARY KEY ("user1Id", "user2Id");

-- AddForeignKey
ALTER TABLE "UserFriend" ADD CONSTRAINT "UserFriend_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFriend" ADD CONSTRAINT "UserFriend_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
