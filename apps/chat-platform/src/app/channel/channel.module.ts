import { MessageModule } from './../message/message.module';
import { Channel, ChannelSchema } from './Schema/channel.schema';
import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelGateway } from './channel.gateway';
import { ChannelController } from './channel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from '../message/schema/message.schema';
import { User, UserSchema } from '../user/schema/user.schema';

@Module({
  providers: [ChannelGateway, ChannelService],
  controllers: [ChannelController],
  imports: [
    MongooseModule.forFeature([
      { name: Channel.name, schema: ChannelSchema },
      { name: User.name, schema: UserSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
    MessageModule,
  ],
  exports: [ChannelService],
})
export class ChannelModule {}
