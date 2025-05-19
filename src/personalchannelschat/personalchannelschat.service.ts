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
    console.log('findAllMessages', id, query);
    // 1. 해당 채널의 메시지들을 가져오고, 유저 정보도 함께 include
    // const messages = await this.prismaService.personal_Channels_Chat.findMany({
    //   where: {
    //     channelId: id,
    //     enabled: true,
    //     ...(query.cursor && {
    //       id: { gt: Number(query.cursor) }, // id가 커서보다 큰 (즉, 이후 메시지)
    //     }),
    //   },
    //   orderBy: { createdAt: 'asc' },
    //   take: Number(query.limit),
    //   include: {
    //     user: {
    //       select: {
    //         name: true,
    //         avatar: true,
    //       },
    //     },
    //   },
    // });

    const blocks = await this.prismaService.$queryRaw<ChatBlock[]>`
    SELECT
      p.userId,
      DATE_FORMAT(p.createdAt, '%Y-%m-%dT%H:%iZ') as timeGroup,
      JSON_ARRAYAGG(JSON_OBJECT(  
        'id', p.id,
        'content', p.content,
        'createdAt', p.createdAt,
        'userId', p.userId
      )) as messages,
      MAX(p.createdAt) as latestMessage,
      u.name as name,
      u.avatar as avatar
    FROM Personal_Channels_Chat p
    JOIN User u ON u.id = p.userId
    WHERE
      p.channelId = ${id}
      AND p.enabled = true
      ${query.cursor ? Prisma.sql`AND p.createdAt > ${query.cursor}` : Prisma.empty}
    GROUP BY p.userId, timeGroup
    ORDER BY latestMessage ASC
    LIMIT ${Number(query.limit)};
  `;

    for (const block of blocks) {
      if (block.avatar)
        block.avatar = await this.s3Service.getSignedUrl(block.avatar);
    }
    return blocks;
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
