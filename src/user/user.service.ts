import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt';
import { randomInt } from 'crypto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashgedPassword = await bcrypt.hash(createUserDto.password, 10);
    await this.prismaService.user.create({
      data: {
        userid: createUserDto.name + randomInt(100000, 1000000),
        ...createUserDto,
        password: hashgedPassword,
      },
    });
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    await this.prismaService.user.deleteMany();
    return `This action removes a #${id} user`;
  }
}
