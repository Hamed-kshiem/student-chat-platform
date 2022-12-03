import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Channel } from '../../channel/Schema/channel.schema';
import { User } from '../../user/schema/user.schema';
import { Document } from 'mongoose';

@Schema()
export class Message extends Document {
  @Prop({ required: true })
  content: string;

  @Prop()
  channelId?: string;

  @Prop()
  from: string;

  @Prop()
  to?: string;

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;

  @Prop()
  type?: string;

  @Prop()
  read?: boolean;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
