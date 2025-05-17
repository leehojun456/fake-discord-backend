import { Injectable, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePhone, UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt';
import { S3Service } from 'src/aws/s3.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      return null;
    }

    // 파일 접근 가능한 URL 구성
    if (user.avatar != null) {
      user.avatar = (await this.s3Service.getSignedUrl(user.avatar)).toString();
    }

    if (user.banner != null) {
      user.banner = (await this.s3Service.getSignedUrl(user.banner)).toString();
    }

    return user;
  }

  async findUser(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      return null;
    }

    // 파일 접근 가능한 URL 구성
    if (user.avatar != null) {
      user.avatar = (await this.s3Service.getSignedUrl(user.avatar)).toString();
    }

    if (user.banner != null) {
      user.banner = (await this.s3Service.getSignedUrl(user.banner)).toString();
    }

    return user;
  }

  async phoneUpdate(id: number, updatePhone: UpdatePhone) {
    try {
      const updatedUser = await this.prismaService.user.update({
        where: { id },
        data: updatePhone,
      });
      console.log('updatedUser', updatedUser);
      return updatedUser;
    } catch (error) {
      console.log('error', error);
    }
    return `This action updates a #${id} user`;
  }

  async updateAvatar(id: number, image: any) {
    // 파일 업로드 함수
    const objectKey = `users/${id}/avatar/${id}-avatar.jpg`;

    await this.s3Service.uploadFile(objectKey, image.buffer, image.mimetype);

    await this.prismaService.user.update({
      where: { id },
      data: {
        avatar: objectKey, // 업로드된 파일의 URL을 DB에 저장
      },
    });

    return await this.s3Service.getSignedUrl(objectKey);
  }

  async updateBanner(id: number, image: any) {
    // 파일 업로드 함수
    const objectKey = `users/${id}/banner/${id}-banner.jpg`;

    await this.s3Service.uploadFile(objectKey, image.buffer, image.mimetype);

    await this.prismaService.user.update({
      where: { id },
      data: {
        banner: objectKey, // 업로드된 파일의 URL을 DB에 저장
      },
    });

    return await this.s3Service.getSignedUrl(objectKey);
  }

  async remove(id: number) {
    await this.prismaService.user.deleteMany();
    return `This action removes a #${id} user`;
  }
}
