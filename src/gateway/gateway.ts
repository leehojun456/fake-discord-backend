import { UseGuards } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
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
    // 비동기 처리
    await this.personalchannelschatService.create(body);
    console.log('Message processed and chat created');
  }
}
