-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ACCEPTED', 'BLOCKED', 'DENIED', 'IDLE');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('gameReq', 'friendReq');

-- CreateEnum
CREATE TYPE "channelType" AS ENUM ('DM', 'PUBLIC', 'PRIVATE', 'PROTECTED');

-- CreateEnum
CREATE TYPE "roles" AS ENUM ('USER', 'ADMIN', 'OWNER');

-- CreateEnum
CREATE TYPE "GameMode" AS ENUM ('RANDOM', 'AGAINST_FRIEND', 'AGAINST_ROBOT');

-- CreateTable
CREATE TABLE "Channel" (
    "id" SERIAL NOT NULL,
    "type" "channelType" NOT NULL DEFAULT 'DM',
    "name" TEXT NOT NULL,
    "topic" TEXT NOT NULL,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "channelID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "channelID" INTEGER NOT NULL,
    "userID" INTEGER NOT NULL,
    "role" "roles" NOT NULL DEFAULT 'USER',

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "T_User" (
    "uid" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'online',
    "username" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL DEFAULT 'I am a player',
    "password" TEXT NOT NULL,
    "twoFA" BOOLEAN NOT NULL DEFAULT false,
    "wallet" INTEGER NOT NULL DEFAULT 0,
    "banner" TEXT NOT NULL DEFAULT '/defaultBanner.jpg',
    "level" INTEGER NOT NULL DEFAULT 0,
    "rank" TEXT NOT NULL DEFAULT '0',
    "win" INTEGER NOT NULL DEFAULT 0,
    "lose" INTEGER NOT NULL DEFAULT 0,
    "role" TEXT NOT NULL DEFAULT 'User',
    "strategy" TEXT NOT NULL DEFAULT 'local',

    CONSTRAINT "T_User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "type" "NotificationType" NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "ruserId" INTEGER NOT NULL,
    "suserId" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFriend" (
    "user1Id" INTEGER NOT NULL,
    "user2Id" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'IDLE',

    CONSTRAINT "UserFriend_pkey" PRIMARY KEY ("user1Id","user2Id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "power" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserItem" (
    "userId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "choosed" BOOLEAN NOT NULL,

    CONSTRAINT "UserItem_pkey" PRIMARY KEY ("userId","itemId")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "uri" TEXT NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAchievement" (
    "userId" INTEGER NOT NULL,
    "achivementId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unlocked" BOOLEAN NOT NULL,
    "choosed" BOOLEAN NOT NULL,

    CONSTRAINT "UserAchievement_pkey" PRIMARY KEY ("userId","achivementId")
);

-- CreateTable
CREATE TABLE "MatchHistory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "winner" INTEGER NOT NULL,
    "loser" INTEGER NOT NULL,
    "winnerScore" INTEGER NOT NULL,
    "loserScore" INTEGER NOT NULL,
    "gameMode" "GameMode" NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MatchHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "T_User_email_key" ON "T_User"("email");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userID_fkey" FOREIGN KEY ("userID") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_channelID_fkey" FOREIGN KEY ("channelID") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_channelID_fkey" FOREIGN KEY ("channelID") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_userID_fkey" FOREIGN KEY ("userID") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_ruserId_fkey" FOREIGN KEY ("ruserId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_suserId_fkey" FOREIGN KEY ("suserId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFriend" ADD CONSTRAINT "UserFriend_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFriend" ADD CONSTRAINT "UserFriend_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_achivementId_fkey" FOREIGN KEY ("achivementId") REFERENCES "Achievement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchHistory" ADD CONSTRAINT "MatchHistory_winner_fkey" FOREIGN KEY ("winner") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchHistory" ADD CONSTRAINT "MatchHistory_loser_fkey" FOREIGN KEY ("loser") REFERENCES "T_User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
