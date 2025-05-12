import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonalchannelDto {
  @ApiProperty({ description: '참여시킬 유저 번호', example: '1001' })
  userId: number[];
}
