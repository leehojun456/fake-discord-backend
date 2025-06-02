import { Injectable } from '@nestjs/common';
import { CreatePersonalchannelDto } from './dto/create-personalchannel.dto';
import { UpdatePersonalchannelDto } from './dto/update-personalchannel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { channel } from 'diagnostics_channel';
import { S3Service } from 'src/aws/s3.service';

@Injectable()
export class PersonalchannelsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  // 채팅방 생성
  async create(
    userId: number,
    createPersonalchannelDto: CreatePersonalchannelDto,
  ) {
    createPersonalchannelDto.userId = [
      ...createPersonalchannelDto.userId,
      userId,
    ];

    // 모든 유저 ID를 포함하는 채널을 찾습니다.
    const allUserChannels =
      await this.prismaService.personal_Channels_Users.findMany({
        where: {
          userId: { in: createPersonalchannelDto.userId },
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
    console.log('existingChannelId', channelUserMap);

    // 3. 모든 유저가 정확히 참여 중인 채널이 있는지 검사합니다.
    let existingChannelId: number | null = null;
    for (const [channelId, userIds] of channelUserMap.entries()) {
      const sortedUserIds = userIds.sort();
      if (
        JSON.stringify(sortedUserIds) ===
        JSON.stringify(createPersonalchannelDto.userId.sort())
      ) {
        existingChannelId = channelId;
        break;
      }
    }

    console.log('existingChannelId', existingChannelId);

    if (existingChannelId) {
      // 4. 이미 존재하는 채널이 있으면 해당 채널 ID를 사용합니다.
      return {
        channelId: existingChannelId,
        isExisting: true,
      };
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
      await prisma.personal_Channels_Users.createMany({
        data: createPersonalchannelDto.userId.map((userId) => ({
          userId: userId,
          channelId: channel.id,
        })),
      });

      // 내 채팅 리스트에 추가합니다.
      await prisma.personal_Channels_List.create({
        data: {
          userId: userId,
          channelId: channel.id,
        },
      });
    });
    return {
      channelId: existingChannelId,
      isExisting: false,
    };
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

  async findChannelUsers(id: number) {
    const users = await this.prismaService.personal_Channels_Users.findMany({
      where: { channelId: id },
      select: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
            userid: true,
          },
        },
      },
    });

    console.log('users', users);

    for (const user of users) {
      const avatar = user.user.avatar;
      console.log('user.user.avatar', user);

      if (avatar != null) {
        // 파일 접근 가능한 URL 구성
        user.user.avatar = (
          await this.s3Service.getSignedUrl(avatar)
        ).toString();
        console.log('user.user.avatar', user.user.avatar);
      }
    }
    return users;
  }

  update(id: number, updatePersonalchannelDto: UpdatePersonalchannelDto) {
    return `This action updates a #${id} personalchannel`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalchannel`;
  }
}
