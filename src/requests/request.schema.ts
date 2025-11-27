import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RequestLogDocument = RequestLog & Document;

@Schema({ timestamps: true })
export class RequestLog {
  @Prop({ required: true })
  clientId: string;

  @Prop({ required: true })
  modelId: string;

  @Prop()
  endpoint: string;

  @Prop()
  success: boolean;
}

export const RequestLogSchema = SchemaFactory.createForClass(RequestLog);
