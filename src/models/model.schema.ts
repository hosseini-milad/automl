import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MLModelDocument = MLModel & Document;

@Schema({ timestamps: true })
export class MLModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  businessId: string;

  @Prop()
  version: string;

  @Prop({ default: 'training' })
  status: string;

  @Prop()
  filePath: string;
}

export const ModelSchema = SchemaFactory.createForClass(MLModel);
