import { Module } from '@nestjs/common';
import { PersonalchannelschatService } from './personalchannelschat.service';
import { PersonalchannelschatController } from './personalchannelschat.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { S3Service } from 'src/aws/s3.service';

@Module({
  controllers: [PersonalchannelschatController],
  providers: [PersonalchannelschatService, S3Service],
  imports: [PrismaModule],
})
export class PersonalchannelschatModule {}
