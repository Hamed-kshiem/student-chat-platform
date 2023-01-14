import { CreateMessageDto } from './../message/dto/create-message.dto';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  namespace: '/channel',
  cors: {
    origin: ['http://localhost:4200', 'localhost:4200'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class ChannelGateway implements OnGatewayInit {
  @WebSocketServer() wss: Server;
  private logger: Logger = new Logger('channelGateway');

  constructor(private readonly channelService: ChannelService) {}
  afterInit(server: any) {
    // throw new Error('Method not implemented.');
    this.logger.log('channel gateway Initialized!');
  }

  @SubscribeMessage('Channel:subscribe')
  create(@MessageBody() createChannelDto: CreateChannelDto) {
    return this.channelService.create(createChannelDto);
  }

  @SubscribeMessage('sendMessage')
  handleMessage(
    client: Socket,
    message: { sender: string; channel: string; message: CreateMessageDto }
  ) {
    this.channelService.insertMessageIntoChannel(
      message.channel,
      message.message
    );
    console.log(message);
    this.wss.to(message.channel).emit('channelToClient', message);
    //.to(message.channel)
  }

  @SubscribeMessage('joinChannel')
  handleChannelJoin(client: Socket, channel: any) {
    console.log('joinChannel', channel.channel, client.id);
    client.join(channel.channel);
    client.emit('joinChannel', channel.channel);
  }

  @SubscribeMessage('leaveChannel')
  handleChannelLeave(client: Socket, channel: any) {
    console.log('leaveChannel', channel.channel);
    client.leave(channel.channel);
    client.emit('leaveChannel', channel.channel);
  }
}
