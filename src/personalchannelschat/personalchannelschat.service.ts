import { Injectable } from '@nestjs/common';
import { CreatePersonalchannelschatDto } from './dto/create-personalchannelschat.dto';
import { UpdatePersonalchannelschatDto } from './dto/update-personalchannelschat.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Personal_Channels_Chat, Prisma } from 'generated/prisma/client';
import { S3Service } from 'src/aws/s3.service';
import { GetPersonalchannelschatDto } from './dto/get-personalchannelschat.dto';

// 확장된 타입 정의 (user 포함)
type ChatBlock = {
  userId: number;
  timeGroup: string;
  messages: {
    id: number;
    content: string;
    createdAt: string;
  }[];
  latestMessage: string;
  name: string;
  avatar: string | null;
};

@Injectable()
export class PersonalchannelschatService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

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

  async findAllMessages(id: number, query: GetPersonalchannelschatDto) {
    const sortOrder =
      query.sort === 'asc' || query.sort === 'desc' ? query.sort : 'desc';
    const limit = Number(query.limit) || 20;

    const cursorCondition =
      query.cursor !== undefined
        ? {
            id: {
              [sortOrder === 'asc' ? 'gt' : 'lt']: Number(query.cursor),
            },
          }
        : {};

    const [totalCount, messages] = await this.prismaService.$transaction([
      this.prismaService.personal_Channels_Chat.count({
        where: {
          channelId: id,
          enabled: true,
        },
      }),
      this.prismaService.personal_Channels_Chat.findMany({
        where: {
          channelId: id,
          enabled: true,
          ...cursorCondition,
        },
        orderBy: {
          id: sortOrder,
        },
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      }),
    ]);

    return {
      totalCount,
      messages,
    };
  }

  async updateMessage(
    id: number,
    messageId: number,
    updatePersonalchannelschatDto: UpdatePersonalchannelschatDto,
  ) {
    await this.prismaService.personal_Channels_Chat.update({
      where: { id: messageId },
      data: updatePersonalchannelschatDto,
    });
  }

  async deleteMessage(messageId: number) {
    await this.prismaService.personal_Channels_Chat.update({
      where: { id: messageId },
      data: { enabled: false },
    });
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
