import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PersonalchannelschatService } from 'src/personalchannelschat/personalchannelschat.service';

@Module({
  imports: [PrismaModule],
  providers: [MyGateway, PersonalchannelschatService],
})
export class GatewayModule {}
