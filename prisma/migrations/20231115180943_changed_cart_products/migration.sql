/*
  Warnings:

  - You are about to drop the column `cartId` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_cartId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `cartId`;

-- CreateTable
CREATE TABLE `ProductCart` (
    `id` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cartId` VARCHAR(191) NULL,
    `discount` BOOLEAN NOT NULL,
    `value_discount` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductCart` ADD CONSTRAINT `ProductCart_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `Cart`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
