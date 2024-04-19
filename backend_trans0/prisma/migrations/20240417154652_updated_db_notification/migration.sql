/*
  Warnings:

  - You are about to drop the column `userId` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `ruserId` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suserId` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'DENIED';

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "userId",
ADD COLUMN     "ruserId" INTEGER NOT NULL,
ADD COLUMN     "suserId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_ruserId_fkey" FOREIGN KEY ("ruserId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_suserId_fkey" FOREIGN KEY ("suserId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
