import { Controller, Get } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getAllMessages() {
    return this.messageService.findAll();
  }

  @Get('channel/:channelId')
  getMessagesByChannelId(channelId: string) {
    return this.messageService.getMessagesByChannelId(channelId);
  }

  @Get('user/:userId')
  getMessagesByUserId(userId: string) {
    return this.messageService.getMessagesByUserId(userId);
  }

  @Get('user/:userId/channel/:channelId')
  getMessagesByUserIdAndChannelId(userId: string, channelId: string) {
    return this.messageService.getMessagesByUserIdAndChannelId(
      userId,
      channelId
    );
  }
}
