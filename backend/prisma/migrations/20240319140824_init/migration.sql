-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ACCEPTED', 'BLOCKED');

-- CreateTable
CREATE TABLE "T_User" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "twoFA" BOOLEAN NOT NULL DEFAULT false,
    "avatar" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER NOT NULL DEFAULT 0,
    "rank" TEXT NOT NULL,
    "win" INTEGER NOT NULL DEFAULT 0,
    "lose" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "T_User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFriend" (
    "friendId" INTEGER NOT NULL,
    "friendWithMeId" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "UserFriend_pkey" PRIMARY KEY ("friendId","friendWithMeId")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "is_avatar" BOOLEAN NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserItem" (
    "userId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "unlocked" BOOLEAN NOT NULL,
    "choosed" BOOLEAN NOT NULL,

    CONSTRAINT "UserItem_pkey" PRIMARY KEY ("userId","itemId")
);

-- CreateIndex
CREATE UNIQUE INDEX "T_User_username_key" ON "T_User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "T_User_email_key" ON "T_User"("email");

-- AddForeignKey
ALTER TABLE "UserFriend" ADD CONSTRAINT "UserFriend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "T_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFriend" ADD CONSTRAINT "UserFriend_friendWithMeId_fkey" FOREIGN KEY ("friendWithMeId") REFERENCES "T_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "T_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
