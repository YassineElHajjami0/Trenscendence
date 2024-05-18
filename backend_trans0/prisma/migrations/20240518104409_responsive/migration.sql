/*
  Warnings:

  - The `rank` column on the `T_User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "T_User" DROP COLUMN "rank",
ADD COLUMN     "rank" SERIAL NOT NULL;
