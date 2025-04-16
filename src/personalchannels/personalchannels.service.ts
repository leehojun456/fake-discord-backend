import { Injectable } from '@nestjs/common';
import { CreatePersonalchannelDto } from './dto/create-personalchannel.dto';
import { UpdatePersonalchannelDto } from './dto/update-personalchannel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonalchannelsService {
  constructor(private readonly prismaService: PrismaService) {}

  // 채팅방 생성
  async create(
    userId: number,
    createPersonalchannelDto: CreatePersonalchannelDto,
  ) {
    const reuslt = await this.prismaService.$transaction(async (prisma) => {
      // 채팅방을 생성합니다.

      const channel = await this.prismaService.personal_Channels.create({
        data: {
          userId: userId,
        },
      });

      // 채팅방에 참여하는 유저를 추가합니다.
      const user = await this.prismaService.personal_Channels_Users.createMany({
        data: createPersonalchannelDto.userId.map((userId) => ({
          userId: userId,
          channelId: channel.id,
        })),
      });

      // 내 채팅 리스트에 추가합니다.
      const list = await this.prismaService.personal_Channels_List.create({
        data: {
          userId: userId,
          channelId: channel.id,
        },
      });
      return { channel, user, list };
    });
    return reuslt;
  }

  findAll() {
    return `This action returns all personalchannels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalchannel`;
  }

  update(id: number, updatePersonalchannelDto: UpdatePersonalchannelDto) {
    return `This action updates a #${id} personalchannel`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalchannel`;
  }
}
