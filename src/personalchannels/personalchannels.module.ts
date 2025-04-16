import { Module } from '@nestjs/common';
import { PersonalchannelsService } from './personalchannels.service';
import { PersonalchannelsController } from './personalchannels.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PersonalchannelsController],
  providers: [PersonalchannelsService],
  imports: [PrismaModule],
})
export class PersonalchannelsModule {}
