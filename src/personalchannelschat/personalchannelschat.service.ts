import { Injectable } from '@nestjs/common';
import { CreatePersonalchannelschatDto } from './dto/create-personalchannelschat.dto';
import { UpdatePersonalchannelschatDto } from './dto/update-personalchannelschat.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { groupBy } from 'lodash';
import { Personal_Channels_Chat } from 'generated/prisma/client';

@Injectable()
export class PersonalchannelschatService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPersonalchannelschatDto: CreatePersonalchannelschatDto) {
    await this.prismaService.personal_Channels_Chat.create({
      data: {
        userId: createPersonalchannelschatDto.userId,
        channelId: createPersonalchannelschatDto.channelId,
        content: createPersonalchannelschatDto.content,
      },
    });

    return 'This action adds a new personalchannelschat';
  }

  async findAll() {
    const data = await this.prismaService.personal_Channels_Chat.findMany();
    console.log(data);
    return data;
  }

  async findAllMessages(id: number) {
    const messages = await this.prismaService.personal_Channels_Chat.findMany({
      where: { channelId: id },
      orderBy: { createdAt: 'asc' },
    });

    // userId + 'YYYY-MM-DD HH:mm' 기준으로 그룹핑
    const grouped = Object.values(
      groupBy(messages, (msg) => {
        const dateTime = msg.createdAt
          .toISOString()
          .slice(0, 16)
          .replace('T', ' ');
        return `${msg.userId}-${dateTime}`;
      }),
    ) as Personal_Channels_Chat[][];

    const result = grouped.map((group) => {
      const { userId, createdAt } = group[0];
      return {
        userId,
        date: createdAt.toISOString().split('T')[0],
        messages: group,
      };
    });

    console.log(result);

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalchannelschat`;
  }

  update(
    id: number,
    updatePersonalchannelschatDto: UpdatePersonalchannelschatDto,
  ) {
    return `This action updates a #${id} personalchannelschat`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalchannelschat`;
  }
}
