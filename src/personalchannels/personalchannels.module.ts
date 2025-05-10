import { Module } from '@nestjs/common';
import { PersonalchannelsService } from './personalchannels.service';
import { PersonalchannelsController } from './personalchannels.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PersonalchannelschatService } from 'src/personalchannelschat/personalchannelschat.service';

@Module({
  controllers: [PersonalchannelsController],
  providers: [PersonalchannelsService, PersonalchannelschatService],
  imports: [PrismaModule],
})
export class PersonalchannelsModule {}
