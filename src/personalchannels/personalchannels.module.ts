import { Module } from '@nestjs/common';
import { PersonalchannelsService } from './personalchannels.service';
import { PersonalchannelsController } from './personalchannels.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PersonalchannelschatService } from 'src/personalchannelschat/personalchannelschat.service';
import { S3Service } from 'src/aws/s3.service';

@Module({
  controllers: [PersonalchannelsController],
  providers: [PersonalchannelsService, PersonalchannelschatService, S3Service],
  imports: [PrismaModule],
})
export class PersonalchannelsModule {}
