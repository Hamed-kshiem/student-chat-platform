import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChannelService } from '../channel/channel.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './schema/message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>
  ) {}

  create(createMessageDto: CreateMessageDto) {
    console.log('recived', createMessageDto);
    const newMessage = new this.messageModel(createMessageDto);
    return newMessage.save();
  }

  async getMessagesByChannelId(channelId: string) {
    return await this.messageModel.find({ channelId }).sort({ createdAt: 1 });
  }

  async getMessagesByUserId(userId: string) {
    return await this.messageModel.find({
      $or: [{ from: userId }, { to: userId }],
    });
  }

  async getMessagesByUserIdAndChannelId(userId: string, channelId: string) {
    return await this.messageModel.find({
      $or: [{ from: userId }, { to: userId }],
      channelId,
    });
  }

  findAll() {
    return `This action returns all message`;
  }
}
