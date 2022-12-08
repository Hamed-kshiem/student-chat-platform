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

@WebSocketGateway({ namespace: '/channel' })
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
    this.wss.to(message.channel).emit('channelToClient', message);
  }

  @SubscribeMessage('joinChannel')
  handleChannelJoin(client: Socket, channel: string) {
    client.join(channel);
    client.emit('joinedChannel', channel);
  }

  @SubscribeMessage('leaveChannel')
  handleChannelLeave(client: Socket, channel: string) {
    client.leave(channel);
    client.emit('leftChannel', channel);
  }
}
