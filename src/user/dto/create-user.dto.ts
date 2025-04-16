import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '이름', example: 'John Doe' })
  name: string;
  @ApiProperty({ description: '비밀번호', example: 'password123' })
  password: string;
  @ApiProperty({ description: '이메일', example: '123@example.com' })
  email: string;
}
