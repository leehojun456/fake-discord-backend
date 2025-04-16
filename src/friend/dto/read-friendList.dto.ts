import { ApiProperty } from '@nestjs/swagger';

export class ReadFriendListDto {
  @ApiProperty({ description: '이름', example: 'calb' })
  name: string;
  @ApiProperty({ description: '유저아이디', example: '1001' })
  userId: number;
}
