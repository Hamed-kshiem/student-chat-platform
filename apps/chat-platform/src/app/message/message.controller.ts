import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageService } from './message.service';
@ApiTags('message')
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getAllMessages() {
    return this.messageService.findAll();
  }

  @Get('channel/:channelId')
  getMessagesByChannelId(@Param('channelId') channelId: string) {
    return this.messageService.getMessagesByChannelId(channelId);
  }

  @Get('user/:userId')
  getMessagesByUserId(@Param('userId') userId: string) {
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
