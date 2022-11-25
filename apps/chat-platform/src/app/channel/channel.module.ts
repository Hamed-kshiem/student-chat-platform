import { Channel, ChannelSchema } from './Schema/channel.schema';
import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelGateway } from './channel.gateway';
import { ChannelController } from './channel.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [ChannelGateway, ChannelService],
  controllers: [ChannelController],
  imports: [
    MongooseModule.forFeature([{ name: Channel.name, schema: ChannelSchema }]),
  ],
  exports: [ChannelService],
})
export class ChannelModule {}
