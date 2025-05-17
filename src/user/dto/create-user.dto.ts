import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '이름', example: 'John Doe' })
  name: string;
  @ApiProperty({ description: '유저 아이디', example: 'John Doe' })
  userid: string;
  @ApiProperty({ description: '비밀번호', example: 'password123' })
  password: string;
  @ApiProperty({ description: '이메일', example: '123@example.com' })
  email: string;
  @ApiProperty({ description: '생일일', example: '2025-10-10' })
  birth: Date;
}
