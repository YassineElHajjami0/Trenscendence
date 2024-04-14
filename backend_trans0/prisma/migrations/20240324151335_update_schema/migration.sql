/*
  Warnings:

  - The primary key for the `UserFriend` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserFriend` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserFriend" DROP CONSTRAINT "UserFriend_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserFriend_pkey" PRIMARY KEY ("user1Id", "user2Id");
