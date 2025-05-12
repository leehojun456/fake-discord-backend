import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { S3Service } from 'src/aws/s3.service';

@Module({
  controllers: [UserController],
  providers: [UserService, S3Service],
  imports: [PrismaModule],
})
export class UserModule {}
