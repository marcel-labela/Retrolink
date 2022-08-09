-- CreateEnum
CREATE TYPE "ProductTypeEnum" AS ENUM ('CONSOLE', 'GAME', 'ACCESSORY', 'OTHER');

-- CreateEnum
CREATE TYPE "ConditionOfProductEnum" AS ENUM ('NEW', 'GOODASNEW', 'USED');

-- CreateEnum
CREATE TYPE "AdvertStatusEnum" AS ENUM ('SOLD', 'FORSALE', 'RESERVED');

-- CreateEnum
CREATE TYPE "SendingPrefEnum" AS ENUM ('PICKUP', 'SEND', 'PICKUPANDSEND');

-- CreateEnum
CREATE TYPE "ConsoleEnum" AS ENUM ('WII', 'SWITCH', 'GAMEBOY', 'DS', 'DS2D', 'DS3D', 'PSCLASSIC', 'PS2', 'PS3', 'PS4', 'PS5', 'NES', 'SNES', 'GC', 'N64', 'XBOXCLASSIC', 'XBOX360', 'XBOXONE', 'PSP', 'SEGA', 'DREAMCAST', 'OTHER');

-- CreateTable
CREATE TABLE "Advert" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "status" "AdvertStatusEnum" NOT NULL DEFAULT E'FORSALE',
    "preferenceOfSending" "SendingPrefEnum" NOT NULL,
    "condition" "ConditionOfProductEnum" NOT NULL,
    "console" "ConsoleEnum" NOT NULL,
    "productType" "ProductTypeEnum" NOT NULL,

    CONSTRAINT "Advert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Advert_id_key" ON "Advert"("id");

-- AddForeignKey
ALTER TABLE "Advert" ADD CONSTRAINT "Advert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
