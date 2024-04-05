-- DropIndex
DROP INDEX "T_User_username_key";

-- AlterTable
ALTER TABLE "T_User" ALTER COLUMN "email" DROP DEFAULT;
