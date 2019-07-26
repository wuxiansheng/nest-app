import { CreateUserDto } from './dto/create-user.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interfaces';
import { ApiBearerAuth, ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    @ApiResponse({ status: 201, description: 'The record has been successfully findAll.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    creat(@Body() creatUserDto: CreateUserDto) {
       return this.userService.create(creatUserDto);
    }
}
