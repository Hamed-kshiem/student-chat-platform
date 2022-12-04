import { CreateMessageDto } from './../message/dto/create-message.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';

@ApiTags('channel')
@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  getAllChannels() {
    return this.channelService.findAll();
  }

  @Get(':id')
  getChannelById(@Param('id') id: number) {
    return this.channelService.findOne(id);
  }

  @Get('checkifchannelexists/:userId1/:userId2')
  checkIfChannelExists(userId1: string, userId2: string) {
    return this.channelService.checkIfChannelExists(userId1, userId2);
  }

  @Post()
  createChannel(@Body() createChannelDto: CreateChannelDto) {
    return this.channelService.create(createChannelDto);
  }

  @Get('user/:userId')
  getChannelsByUserId(@Param('userId') userId: string) {
    return this.channelService.getChannelsbyUserId(userId);
  }

  // insert message into channel by channel id
  @Post('message/:channelId')
  insertMessageIntoChannel(
    @Param('channelId') channelId: string,
    @Body() message: CreateMessageDto
  ) {
    return this.channelService.insertMessageIntoChannel(channelId, message);
  }
}
