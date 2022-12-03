import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageService } from '../message/message.service';
import { Message } from '../message/schema/message.schema';
import { User } from '../user/schema/user.schema';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from './Schema/channel.schema';

@Injectable()
export class ChannelService {
  constructor(
    @InjectModel(Channel.name) private channelModel: Model<Channel>,
    @InjectModel(Message.name) private messageModel: Model<Message>,
    @InjectModel(User.name) private userModel: Model<User>,
    @Inject(forwardRef(() => MessageService))
    private messageService: MessageService
  ) {}

  create(createChannelDto: CreateChannelDto) {
    return this.channelModel.create(createChannelDto);
  }

  findAll() {
    return this.channelModel.find();
  }

  findOne(id: number) {
    return this.channelModel.findById(id);
  }

  getChannelMessagesByUserId(userId: string) {
    return this.channelModel.find({ members: userId }).populate('messages');
  }

  getChannelMessages(channelId: string) {
    return this.channelModel.findById(channelId).populate('messages');
  }

  update(id: number, updateChannelDto: UpdateChannelDto) {
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
