/*
  Warnings:

  - The `type` column on the `Channel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `Role` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "channelType" AS ENUM ('DM', 'PUBLIC', 'PRIVATE', 'PROTECTED');

-- CreateEnum
CREATE TYPE "roles" AS ENUM ('USER', 'ADMIN', 'OWNER');

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "type",
ADD COLUMN     "type" "channelType" NOT NULL DEFAULT 'DM';

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "role",
ADD COLUMN     "role" "roles" NOT NULL DEFAULT 'USER';
