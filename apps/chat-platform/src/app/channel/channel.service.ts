import { ChannelModule } from './channel.module';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from '../message/dto/create-message.dto';
import { MessageService } from '../message/message.service';
import { Message } from '../message/schema/message.schema';
import { User } from '../user/schema/user.schema';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from './Schema/channel.schema';

@Injectable()
export class ChannelService {
  insertMessageIntoChannel(channelId: string, message: CreateMessageDto) {
    const newMessage = new this.messageModel(message);
    newMessage.save();
    return new Promise((resolve, reject) => {
      this.channelModel
        .findByIdAndUpdate(
          channelId,
          { $push: { messages: newMessage }, lastModified: new Date() },
          { new: true }
        )
        .then((res) => {
          resolve(res);
        });
    });
  }
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

  checkIfChannelExists(userId1: string, userId2: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.channelModel
        .find({
          members: { $all: [userId1, userId2] },
        })
        .then((res) => {
          if (res.length > 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }
  getChannelbyUserIds(userId1: string, userId2: string): Promise<Channel> {
    return new Promise((resolve, reject) => {
      this.channelModel
        .find({
          members: { $all: [userId1, userId2] },
        })
        .then((res) => {
          if (res.length > 0) {
            resolve(res[0]);
          } else {
            resolve(null);
          }
        });
    });
  }

  getChannelsbyUserId(userId: string) {
    return this.channelModel.find(
      { members: { $elemMatch: { $eq: userId } } },
      { messages: 0 }
    );
  }
}
