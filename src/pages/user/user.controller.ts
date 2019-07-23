import { CreateUserDto } from './dto/create-user.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interfaces';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
    @Post()
    creat(@Body() creatUserDto: CreateUserDto) {
        this.userService.create(creatUserDto);
    }
}
