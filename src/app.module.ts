import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { FriendModule } from './friend/friend.module';
import { AuthModule } from './auth/auth.module';
import { ChannelsModule } from './channels/channels.module';
import { PersonalchannelsModule } from './personalchannels/personalchannels.module';

@Module({
  imports: [UserModule, PrismaModule, FriendModule, AuthModule, ChannelsModule, PersonalchannelsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
