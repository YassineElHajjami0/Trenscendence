/*
  Warnings:

  - The primary key for the `Achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Achievement` table. All the data in the column will be lost.
  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Item` table. All the data in the column will be lost.
  - The primary key for the `Notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Notification` table. All the data in the column will be lost.
  - The primary key for the `T_User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `avatar` on the `T_User` table. All the data in the column will be lost.
  - You are about to drop the column `banner` on the `T_User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `T_User` table. All the data in the column will be lost.
  - Added the required column `choosedBanner` to the `T_User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `choosedProfileImage` to the `T_User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_achivementId_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserFriend" DROP CONSTRAINT "UserFriend_friendId_fkey";

-- DropForeignKey
ALTER TABLE "UserFriend" DROP CONSTRAINT "UserFriend_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserItem" DROP CONSTRAINT "UserItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "UserItem" DROP CONSTRAINT "UserItem_userId_fkey";

-- AlterTable
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Achievement_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_pkey",
DROP COLUMN "id",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "Notification_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "T_User" DROP CONSTRAINT "T_User_pkey",
DROP COLUMN "avatar",
DROP COLUMN "banner",
DROP COLUMN "id",
ADD COLUMN     "choosedBanner" TEXT NOT NULL,
ADD COLUMN     "choosedProfileImage" TEXT NOT NULL,
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "T_User_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "UserAchievement" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "UserFriend" ADD CONSTRAINT "UserFriend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFriend" ADD CONSTRAINT "UserFriend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_achivementId_fkey" FOREIGN KEY ("achivementId") REFERENCES "Achievement"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
