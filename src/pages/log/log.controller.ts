import { Controller, Post, Body, Get } from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
import { Log } from './interfaces/log.interfaces';

@Controller('log')
export class LogController {
    constructor(private readonly logService: LogService) {}
    @Post()
    async create(@Body() createLogDto: CreateLogDto) {
        this.logService.create(createLogDto);
    }
    @Get()
    async findAll(): Promise<Log[]> {
        return this.logService.findAll();
    }
}
