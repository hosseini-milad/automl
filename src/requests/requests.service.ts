import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestLog, RequestLogDocument } from './request.schema';

@Injectable()
export class RequestsService {
  constructor(@InjectModel(RequestLog.name) private logModel: Model<RequestLogDocument>) {}

  async log(clientId: string, modelId: string, endpoint: string, success = true) {
    const log = new this.logModel({ clientId, modelId, endpoint, success });
    return log.save();
  }

  async list(clientId: string) {
    return this.logModel.find({ clientId });
  }
}
