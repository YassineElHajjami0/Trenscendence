/*
  Warnings:

  - The values [MODE1,MODE2] on the enum `GameMode` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "GameMode_new" AS ENUM ('RANDOM', 'AGAINST_FRIEND', 'AGAINST_ROBOT');
ALTER TABLE "MatchHistory" ALTER COLUMN "gameMode" TYPE "GameMode_new" USING ("gameMode"::text::"GameMode_new");
ALTER TYPE "GameMode" RENAME TO "GameMode_old";
ALTER TYPE "GameMode_new" RENAME TO "GameMode";
DROP TYPE "GameMode_old";
COMMIT;
