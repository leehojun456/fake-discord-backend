import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ description: '이메일일', example: 'John Doe' })
  email: string;
  @ApiProperty({ description: '비밀번호', example: 'password123' })
  password: string;
}
