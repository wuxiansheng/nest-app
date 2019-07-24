import { CreateLogDto } from './../sys/log/dto/create-log.dto';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interfaces';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private readonly userModel: Model<User>) {}
        async create(createUserDto: CreateLogDto): Promise<User> {
            const createdUser = new this.userModel(createUserDto);
            return await createdUser.save();
        }
        async findAll(): Promise<User[]> {
            return await this.userModel.find().exec();
        }
}
