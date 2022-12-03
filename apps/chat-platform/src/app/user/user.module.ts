import { Channel, ChannelSchema } from './../channel/Schema/channel.schema';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserGateway } from './user.gateway';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';

@Module({
  providers: [UserGateway, UserService],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Channel.name,
        schema: ChannelSchema,
      },
    ]),
  ],
})
export class UserModule {}
