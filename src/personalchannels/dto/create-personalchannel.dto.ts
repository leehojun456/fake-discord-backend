import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonalchannelDto {
  @ApiProperty({ description: '내 유저 번호', example: '1001' })
  userId: number[];
}
