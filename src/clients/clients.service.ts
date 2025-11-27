import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './client.schema';
import { randomBytes } from 'crypto';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>) {}

  async create(name: string, subscriptionId?: string) {
    const apiKey = randomBytes(16).toString('hex');
    const client = new this.clientModel({ name, apiKey, subscriptionId });
    return client.save();
  }

  async findByApiKey(apiKey: string) {
    return this.clientModel.findOne({ apiKey });
  }

  async incrementRequest(clientId: string) {
    return this.clientModel.findByIdAndUpdate(clientId, { $inc: { requestCount: 1 } });
  }
}
