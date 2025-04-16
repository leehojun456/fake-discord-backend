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
} from '@nestjs/common';
import { PersonalchannelsService } from './personalchannels.service';
import { CreatePersonalchannelDto } from './dto/create-personalchannel.dto';
import { UpdatePersonalchannelDto } from './dto/update-personalchannel.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('personalchannels')
export class PersonalchannelsController {
  constructor(
    private readonly personalchannelsService: PersonalchannelsService,
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

  @Get()
  findAll() {
    return this.personalchannelsService.findAll();
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
