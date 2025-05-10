import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendService {
  constructor(private readonly prismaService: PrismaService) {}

  // 친구 추가
  async create(userId: number, createFriendDto: CreateFriendDto) {
    // 친구 ID가 존재하는지 확인
    const data = await this.prismaService.user.findFirst({
      where: { userid: createFriendDto.friendId },
    });

    if (!data?.id) {
      throw new NotFoundException('해당하는 친구 ID를 가진 사용자가 없습니다.');
    }

    if (data?.id == userId) {
      throw new BadRequestException('자기 자신을 친구로 추가할 수 없습니다.');
    }

    // 이미 친구인지 확인
    const existingFriend = await this.prismaService.friend.findFirst({
      where: {
        userId: userId,
        friendId: data.id,
      },
    });

    if (existingFriend) {
      throw new BadRequestException('이미 친구로 등록되어 있습니다.');
    }

    // 친구 추가
    await this.prismaService.friend.create({
      data: {
        userId: userId,
        friendId: data?.id,
      },
    });
    return { message: '친구가 성공적으로 추가되었습니다.' };
  }

  async findAll(userId: number) {
    // 친구 목록 조회
    const rawFriends = await this.prismaService.friend.findMany({
      where: { userId: userId },
      select: {
        friend: {
          select: {
            id: true,
            userid: true,
            name: true,
          },
        },
      },
    });

    const friends = rawFriends.map((friend) => friend.friend);

    return friends;
  }

  async findOne(id: number) {
    // 친구 ID로 해당 유저 정보 조회
    const friend = await this.prismaService.user.findUnique({
      where: { id: id },
      select: {
        name: true,
        userid: true,
      },
    });
    return friend;
  }

  update(id: number, updateFriendDto: UpdateFriendDto) {
    return `This action updates a #${id} friend`;
  }

  remove(id: number) {
    return `This action removes a #${id} friend`;
  }
}
