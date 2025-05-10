import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonalchannelschatService } from './personalchannelschat.service';
import { CreatePersonalchannelschatDto } from './dto/create-personalchannelschat.dto';
import { UpdatePersonalchannelschatDto } from './dto/update-personalchannelschat.dto';

@Controller('personalchannelschat')
export class PersonalchannelschatController {
  constructor(
    private readonly personalchannelschatService: PersonalchannelschatService,
  ) {}

  @Post()
  create(@Body() createPersonalchannelschatDto: CreatePersonalchannelschatDto) {
    return this.personalchannelschatService.create(
      createPersonalchannelschatDto,
    );
  }

  @Get()
  async findAll() {
    return await this.personalchannelschatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalchannelschatService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonalchannelschatDto: UpdatePersonalchannelschatDto,
  ) {
    return this.personalchannelschatService.update(
      +id,
      updatePersonalchannelschatDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalchannelschatService.remove(+id);
  }
}
