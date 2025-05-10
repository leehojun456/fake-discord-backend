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
    const targetUserIds = createPersonalchannelDto.userId.sort(); // 정렬된 유저 ID 배열

    // 모든 유저 ID를 포함하는 채널을 찾습니다.
    const allUserChannels =
      await this.prismaService.personal_Channels_Users.findMany({
        where: {
          userId: { in: targetUserIds },
        },
      });

    // 2. 채널별로 어떤 유저들이 있는지 매핑합니다.
    const channelUserMap = new Map<number, number[]>();
    allUserChannels.forEach((channelUser) => {
      const channelId = channelUser.channelId;
      const userId = channelUser.userId;

      if (!channelUserMap.has(channelId)) {
        channelUserMap.set(channelId, []);
      }
      channelUserMap.get(channelId)?.push(userId);
    });

    // 3. 모든 유저가 정확히 참여 중인 채널이 있는지 검사합니다.
    let existingChannelId: number | null = null;
    for (const [channelId, userIds] of channelUserMap.entries()) {
      const sortedUserIds = userIds.sort();
      if (JSON.stringify(sortedUserIds) === JSON.stringify(targetUserIds)) {
        existingChannelId = channelId;
        break;
      }
    }

    if (existingChannelId) {
      // 4. 이미 존재하는 채널이 있으면 해당 채널 ID를 사용합니다.
      return existingChannelId;
    }

    // 4. 없으면 새로운 채널을 생성합니다.
    const reuslt = await this.prismaService.$transaction(async (prisma) => {
      // 채팅방을 생성합니다.
      const channel = await prisma.personal_Channels.create({
        data: {
          userId: userId,
        },
      });

      // 채팅방에 참여하는 유저를 추가합니다.
      const user = await prisma.personal_Channels_Users.createMany({
        data: createPersonalchannelDto.userId.map((userId) => ({
          userId: userId,
          channelId: channel.id,
        })),
      });

      // 내 채팅 리스트에 추가합니다.
      const list = await prisma.personal_Channels_List.create({
        data: {
          userId: userId,
          channelId: channel.id,
        },
      });
      return { channel, user, list };
    });
    return reuslt;
  }

  async findAll(userId: number) {
    const rawPersonalChannels =
      await this.prismaService.personal_Channels_List.findMany({
        where: { userId: userId },
        select: {
          channel: {
            select: {
              id: true,
              userId: true,
              Personal_Channels_Users: {
                select: {
                  user: {
                    select: {
                      id: true,
                      name: true,
                      userid: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

    const channels = rawPersonalChannels.map(({ channel }) => ({
      id: channel.id,
      members: channel.Personal_Channels_Users.map((member) => ({
        id: member.user.id,
        userId: member.user.userid,
        name: member.user.name,
      })),
    }));

    return channels;
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
