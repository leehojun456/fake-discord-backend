import { PartialType } from '@nestjs/swagger';
import { CreatePersonalchannelDto } from './create-personalchannel.dto';

export class UpdatePersonalchannelDto extends PartialType(CreatePersonalchannelDto) {}
