import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import { User } from '../../user/schema/user.schema';

@Schema()
export class Channel extends Document {
  @Prop({})
  name: string;

  @Prop({ type: [{ type: ObjectId, ref: User.name }] })
  members: User[];
}
export const ChannelSchema = SchemaFactory.createForClass(Channel);
