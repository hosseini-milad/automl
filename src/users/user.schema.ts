import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'user' })
  role: string;

  @Prop()
  subscriptionId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
