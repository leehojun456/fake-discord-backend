import { ApiProperty } from '@nestjs/swagger';

export class CreateFriendDto {
  @ApiProperty({ description: '상대 유저아이디', example: 'Oran891047' })
  friendId: string;
}
