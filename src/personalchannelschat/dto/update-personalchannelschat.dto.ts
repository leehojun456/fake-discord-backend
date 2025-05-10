import { PartialType } from '@nestjs/swagger';
import { CreatePersonalchannelschatDto } from './create-personalchannelschat.dto';

export class UpdatePersonalchannelschatDto extends PartialType(CreatePersonalchannelschatDto) {}
