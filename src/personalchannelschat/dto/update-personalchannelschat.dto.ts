import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePersonalchannelschatDto } from './create-personalchannelschat.dto';

export class UpdatePersonalchannelschatDto extends PartialType(
  CreatePersonalchannelschatDto,
) {
  @ApiProperty({ description: '메세지', example: '안녕하세요' })
  content?: string;
}
