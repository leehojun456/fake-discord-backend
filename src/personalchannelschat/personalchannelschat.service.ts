import { Injectable } from '@nestjs/common';
import { CreatePersonalchannelschatDto } from './dto/create-personalchannelschat.dto';
import { UpdatePersonalchannelschatDto } from './dto/update-personalchannelschat.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { groupBy } from 'lodash';
import { Personal_Channels_Chat } from 'generated/prisma/client';
import { S3Service } from 'src/aws/s3.service';

// 확장된 타입 정의 (user 포함)
type ChatWithUser = Personal_Channels_Chat & {
  user: {
    name: string;
    avatar: string | null;
  };
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

  async findAllMessages(id: number) {
    // 1. 해당 채널의 메시지들을 가져오고, 유저 정보도 함께 include
    const messages = await this.prismaService.personal_Channels_Chat.findMany({
      where: { channelId: id },
      orderBy: { createdAt: 'asc' },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });

    // 2. userId + 'YYYY-MM-DD HH:mm' 단위로 메시지를 그룹핑
    const grouped = Object.values(
      groupBy(messages, (msg) => {
        const dateTime = msg.createdAt
          .toISOString()
          .slice(0, 16) // 'YYYY-MM-DDTHH:mm:ss' → 'YYYY-MM-DDTHH:mm'
          .replace('T', ' '); // 'YYYY-MM-DD HH:mm'
        return `${msg.userId}-${dateTime}`; // 유저별 시간 단위로 그룹핑 키 생성
      }),
    ) as ChatWithUser[][];

    // 3. avatar URL을 캐싱할 객체 (중복 호출 방지)
    const avatarUrlCache: Record<string, string> = {};

    // 4. avatar에 대해 S3 서명된 URL을 가져오되, 캐시를 이용
    async function getSignedAvatar(avatar: string | null) {
      if (!avatar) return null;
      if (avatarUrlCache[avatar]) {
        return avatarUrlCache[avatar]; // 이미 있으면 캐시에서 사용
      }
      const signedUrl = await this.s3Service.getSignedUrl(avatar); // S3에서 서명 URL 받기
      avatarUrlCache[avatar] = signedUrl;
      return signedUrl;
    }

    // 5. 각 그룹을 가공하여 최종 결과 구성
    const result = await Promise.all(
      grouped.map(async (group) => {
        const { userId, createdAt, user } = group[0]; // 그룹 대표 메시지에서 공통 정보 추출

        const signedAvatar = await getSignedAvatar.call(this, user.avatar); // avatar URL 처리

        return {
          userId,
          name: user.name,
          avatar: signedAvatar,
          date: createdAt, // 생성일자
          messages: group.map((msg) => ({
            id: msg.id,
            createdAt: msg.createdAt,
            content: msg.content, // 메시지 본문만 추출
            userId: msg.userId,
          })),
        };
      }),
    );

    console.log(result); // 최종 결과 확인

    return result;
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

  async deleteMessage(id: number, messageId: number, userId: number) {
    this.prismaService.personal_Channels_Chat.update({
      where: { id: messageId, userId: userId, channelId: id },
      data: { enabled: true },
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
