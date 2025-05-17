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
import { ApiOperation } from '@nestjs/swagger';

@Controller('personalchannels')
export class PersonalchannelsController {
  constructor(
    private readonly personalchannelsService: PersonalchannelsService,
    private readonly personalchannelschatService: PersonalchannelschatService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: '개인 채널 생성',
    description: '신규 채널을 생성합니다',
  })
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
  @ApiOperation({
    summary: '내가 생성한 채널 전체 조회',
    description: '내가 생성한 채널을 전체 조회합니다',
  })
  @Get()
  async findAll(@Request() req: any) {
    const userId = req.user.id;
    return await this.personalchannelsService.findAll(userId);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: '특정 개인 채널의 메세지 조회',
    description: '특정 개인 채널의 메세지를 조회합니다',
  })
  @Get(':id/messages')
  async findAllMessages(@Param('id', ParseIntPipe) id: number) {
    return await this.personalchannelschatService.findAllMessages(id);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: '특정 개인 채널의 참여 유저 조회',
    description: '특정 개인 채널의 참여 유저를 조회합니다',
  })
  @Get(':id/users')
  async findChannelUsers(@Param('id') id: string) {
    return await this.personalchannelsService.findChannelUsers(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePersonalchannelDto: UpdatePersonalchannelDto,
  // ) {
  //   return this.personalchannelsService.update(+id, updatePersonalchannelDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personalchannelsService.remove(+id);
  // }
}
