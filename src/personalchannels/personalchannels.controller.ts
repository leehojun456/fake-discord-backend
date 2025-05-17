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
  Response,
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
    @Response() res: any,
    @Body() createPersonalchannelDto: CreatePersonalchannelDto,
  ) {
    const userId = req.user.id;
    const result = await this.personalchannelsService.create(
      userId,
      createPersonalchannelDto,
    );

    if (result.isExisting) {
      return res.status(200).json({
        statusCode: 200,
        message: '기존 채널이 존재합니다.',
        channelId: result.channelId,
      });
    }

    return res.status(201).json({
      statusCode: 201,
      message: '새로운 채널이 생성되었습니다.',
      channelId: result.channelId,
    });
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

  @UseGuards(AuthGuard)
  @Get(':id/users')
  async findChannelUsers(@Param('id') id: string) {
    return await this.personalchannelsService.findChannelUsers(+id);
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
