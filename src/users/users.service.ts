import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(phone: string, password: string, role = 'user') {
    const hashed = await bcrypt.hash(password, 10);
    const user = new this.userModel({ phone, password: hashed, role });
    return user.save();
  }

  async findByphone(phone: string) {
    return this.userModel.findOne({ phone });
  }

  async findById(id: string) {
    return this.userModel.findById(id);
  }
}
