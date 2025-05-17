import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PersonalchannelschatService } from 'src/personalchannelschat/personalchannelschat.service';
import { S3Service } from 'src/aws/s3.service';

@Module({
  imports: [PrismaModule],
  providers: [MyGateway, PersonalchannelschatService, S3Service],
})
export class GatewayModule {}
