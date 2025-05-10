import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonalchannelschatDto {
  @ApiProperty({ description: '내 유저 번호', example: '1001' })
  userId: number;
  @ApiProperty({ description: '채널 번호', example: '1001' })
  channelId: number;
  @ApiProperty({ description: '메세지지', example: 'Hello! World!' })
  content: string;
}
