import { ApiProperty } from '@nestjs/swagger';

export class CreateFriendDto {
  @ApiProperty({ description: '내 계정 번호', example: '1001' })
  userId: number;
  @ApiProperty({ description: '상대 유저아이디', example: 'Oran891047' })
  friendId: string;
}
