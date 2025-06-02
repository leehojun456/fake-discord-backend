import { UseGuards } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { channel } from 'diagnostics_channel';
import { Server, Socket } from 'socket.io';
import { SocketIoJwtGuard } from 'src/auth/auth.guard';
import { CreatePersonalchannelschatDto } from 'src/personalchannelschat/dto/create-personalchannelschat.dto';
import { PersonalchannelschatService } from 'src/personalchannelschat/personalchannelschat.service';

@UseGuards(SocketIoJwtGuard)
@WebSocketGateway({ cors: { origin: '*' } })
export class MyGateway {
  constructor(
    private readonly personalchannelschatService: PersonalchannelschatService,
  ) {}

  private roomMembers = new Map<string, Set<string>>(); // roomId -> Set(socket.id)

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id, 'connected');
    });
  }

  // @SubscribeMessage('connectFriend')
  // onMessage(@MessageBody() body: any): void {
  //   console.log('Message received:', body);
  // }

  @SubscribeMessage('personalChannel')
  async onPersonMessage(
    @MessageBody() body: CreatePersonalchannelschatDto,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    body.userId = client.data.user.id; // 소켓에서 받은 userId를 body에 추가합니다.
    console.log('Message received:', body);
    // 비동기 처리
    await this.personalchannelschatService.create(body);
    console.log('Message processed and chat created');
    this.server.emit('personalChannelResponse', body);
  }

  @SubscribeMessage('call:room:enter')
  handleEnterRoom(
    @MessageBody() data: { channelId: string; userId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const { channelId, userId } = data;
    client.join(channelId);

    // roomMembers: Map<string, Set<userId>>
    if (!this.roomMembers.has(channelId)) {
      this.roomMembers.set(channelId, new Set());
    }

    const members = this.roomMembers.get(channelId)!;
    members.add(userId); // 유저 ID로 멤버 추적

    console.log(members);

    // 나를 제외한 기존 유저들만 클라이언트에게 전달
    const otherMembers = [...members].filter((id) => id !== userId);

    client.emit('call:room:members', { members: otherMembers });

    // 다른 사람들에게 새 멤버 입장 알림
    client.to(channelId).emit('call:room:new-member', { id: userId });

    console.log(`📥 ${userId} (${client.id}) 방 입장: ${channelId}`);
  }

  // 통화 상태 확인
  @SubscribeMessage('call:room:check-exist')
  handleCheckExist(
    @MessageBody() data: { channelId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const { channelId } = data;

    // roomMembers에 해당 channelId가 있고, 멤버가 하나 이상 있으면 존재함
    const exists =
      this.roomMembers.has(channelId) &&
      (this.roomMembers.get(channelId)?.size ?? 0) > 0;

    client.emit('call:room:exist-result', { channelId, exists });
  }
}
