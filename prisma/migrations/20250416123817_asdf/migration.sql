-- CreateTable
CREATE TABLE `Personal_Channels_List` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `channelId` INTEGER NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Personal_Channels_List` ADD CONSTRAINT `Personal_Channels_List_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personal_Channels_List` ADD CONSTRAINT `Personal_Channels_List_channelId_fkey` FOREIGN KEY (`channelId`) REFERENCES `Personal_Channels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
