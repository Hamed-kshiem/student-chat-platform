import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import { Message } from '../../message/schema/message.schema';
import { User } from '../../user/schema/user.schema';

@Schema()
export class Channel extends Document {
  @Prop({})
  name: string;

  @Prop({ type: [String] })
  members: string[];

  @Prop({ type: [{ type: ObjectId, ref: Message.name }] })
  messages: Message[];

  @Prop({
    type: Date,
    default: Date.now,
  })
  lastModified: Date;
}
export const ChannelSchema = SchemaFactory.createForClass(Channel);
