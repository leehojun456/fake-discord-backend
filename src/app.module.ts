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
import { SocketIoJwtGuard } from './auth/auth.guard';
import { PersonalchannelschatModule } from './personalchannelschat/personalchannelschat.module';

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
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
