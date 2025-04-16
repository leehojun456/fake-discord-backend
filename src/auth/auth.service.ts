import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    if (email == null || password == null) {
      throw new BadRequestException('이메일과 비밀번호를 입력해주세요.');
    }

    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('해당 이메일을 가진 사용자가 없습니다.');
    }

    const result = await bcrypt.compare(password, user.password);

    console.log('result', result);
    if (result) {
      const payload = { email: user.email, id: user.id };
      return { accessToken: await this.jwtService.signAsync(payload) };
    }
    if (!result) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }
  }
}
