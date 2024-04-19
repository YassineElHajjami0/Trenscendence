/*
  Warnings:

  - You are about to drop the column `is_avatar` on the `Item` table. All the data in the column will be lost.
  - Added the required column `type` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "is_avatar",
ADD COLUMN     "type" TEXT NOT NULL;
