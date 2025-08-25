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
import { GatewayModule } from './gateway/gateway.module';
import { PersonalchannelschatModule } from './personalchannelschat/personalchannelschat.module';
import { OgPreviewModule } from './og-preview/og-preview.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    FriendModule,
    AuthModule,
    ChannelsModule,
    PersonalchannelsModule,
    GatewayModule,
    PersonalchannelschatModule,
    OgPreviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
