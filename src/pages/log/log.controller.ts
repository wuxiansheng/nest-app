import { Controller, Post, Body, Get } from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
import { Log } from './interfaces/log.interfaces';
import { ApiBearerAuth, ApiResponse, ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('log')
@ApiBearerAuth()
@Controller('log')
export class LogController {
    constructor(private readonly logService: LogService) {}
    @ApiResponse({ status: 201, description: 'The record has been successfully findAll.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @Post()
    async create(@Body() createLogDto: CreateLogDto) {
        this.logService.create(createLogDto);
    }
    @ApiResponse({ status: 201, description: 'The record has been successfully findAll.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @Get()
    async findAll(): Promise<Log[]> {
        return this.logService.findAll();
    }
}
