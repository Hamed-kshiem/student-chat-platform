import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayDisconnect,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@WebSocketGateway()
export class MessageGateway
  implements OnGatewayDisconnect, OnGatewayConnection
{
  constructor(private readonly messageService: MessageService) {}
  handleConnection(client: any, ...args: any[]) {
    console.log('client connected');
  }
  handleDisconnect(client: any) {
    console.log('client disconnected');
  }

  @SubscribeMessage('createMessage')
  create(@MessageBody() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }
}
