import { Module } from '@nestjs/common';
import { PersonalchannelschatService } from './personalchannelschat.service';
import { PersonalchannelschatController } from './personalchannelschat.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PersonalchannelschatController],
  providers: [PersonalchannelschatService],
  imports: [PrismaModule],
})
export class PersonalchannelschatModule {}
