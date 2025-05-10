-- CreateTable
CREATE TABLE `Personal_Channels_Chat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,
    `channelId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Personal_Channels_Chat` ADD CONSTRAINT `Personal_Channels_Chat_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personal_Channels_Chat` ADD CONSTRAINT `Personal_Channels_Chat_channelId_fkey` FOREIGN KEY (`channelId`) REFERENCES `Personal_Channels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
