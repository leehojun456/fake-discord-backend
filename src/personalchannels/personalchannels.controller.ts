import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  ParseIntPipe,
} from '@nestjs/common';
import { PersonalchannelsService } from './personalchannels.service';
import { CreatePersonalchannelDto } from './dto/create-personalchannel.dto';
import { UpdatePersonalchannelDto } from './dto/update-personalchannel.dto';
import { AuthGuard } from 'src/auth/auth.guard';

import { PersonalchannelschatService } from 'src/personalchannelschat/personalchannelschat.service';

@Controller('personalchannels')
export class PersonalchannelsController {
  constructor(
    private readonly personalchannelsService: PersonalchannelsService,
    private readonly personalchannelschatService: PersonalchannelschatService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Request() req: any,
    @Body() createPersonalchannelDto: CreatePersonalchannelDto,
  ) {
    const userId = req.user.id;
    return await this.personalchannelsService.create(
      userId,
      createPersonalchannelDto,
    );
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request() req: any) {
    const userId = req.user.id;
    return await this.personalchannelsService.findAll(userId);
  }

  @UseGuards(AuthGuard)
  @Get(':id/messages')
  async findAllMessages(@Param('id', ParseIntPipe) id: number) {
    return await this.personalchannelschatService.findAllMessages(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalchannelsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonalchannelDto: UpdatePersonalchannelDto,
  ) {
    return this.personalchannelsService.update(+id, updatePersonalchannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalchannelsService.remove(+id);
  }
}
