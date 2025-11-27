import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MLModel, MLModelDocument } from './model.schema';

@Injectable()
export class ModelsService {
  constructor(@InjectModel(MLModel.name) private modelModel: Model<MLModelDocument>) {}

  async createModel(businessId: string, name: string, version = 'v1') {
    const model = new this.modelModel({ businessId, name, version });
    return model.save();
  }

  async listModels(businessId: string) {
    return this.modelModel.find({ businessId });
  }

  async getModel(id: string) {
    return this.modelModel.findById(id);
  }

  async updateStatus(id: string, status: string) {
    return this.modelModel.findByIdAndUpdate(id, { status }, { new: true });
  }
}
