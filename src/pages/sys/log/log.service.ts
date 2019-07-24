import { CreateLogDto } from './dto/create-log.dto';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Log } from './interfaces/log.interfaces';

@Injectable()
export class LogService {
    constructor(
        @Inject('LOG_MODEL')
        private readonly logModel: Model<Log>,
    ) {}
    async create(createLogDto: CreateLogDto): Promise<Log> {
        const createLog = new this.logModel(createLogDto);
        return await createLog.save();
    }
    async findAll(): Promise<Log[]> {
        return await this.logModel.find().exec();
    }
    async findOne(id): Promise<Log> {
        return await this.logModel.findOne(id);
    }
    async update(createLogDto: CreateLogDto): Promise<Log> {

        return ;
    }
}
