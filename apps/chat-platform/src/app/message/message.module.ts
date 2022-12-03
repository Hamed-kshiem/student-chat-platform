import { ChannelModule } from './../channel/channel.module';
import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { MessageController } from './message.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './schema/message.schema';

@Module({
  providers: [MessageGateway, MessageService],
  controllers: [MessageController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Message.name,
        schema: MessageSchema,
      },
    ]),
    // ChannelModule,
  ],
  exports: [MessageService],
})
export class MessageModule {}
