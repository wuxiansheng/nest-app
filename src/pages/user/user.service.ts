import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import * as crypto from 'crypto';
import { UserDate } from './interfaces/user.interfaces';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRespository: Repository<User>) {}
        async findAll(): Promise<User[]> {
            return await this.userRespository.find();
        }
        async findOne(loginUserDto: LoginUserDto): Promise<User> {
        const findOneOptions = {
            email: loginUserDto.email,
            phone: loginUserDto.phone,
            password: crypto.createHmac('sha256', loginUserDto.password).digest('hex'),
        };
        return  await this.userRespository.findOne(findOneOptions);
        }
        async create(dto: CreateUserDto): Promise<UserDate> {
        return  null;
        }
        async update(id: number, dto: UpdateUserDto): Promise<User> {
        const toUpdate = await this.userRespository.findOne(id);
        delete toUpdate.password;
        delete toUpdate.favorites;
        const update = Object.assign(toUpdate, dto);
        return await this.userRespository.save(update);
        }

    async delete(id: string): Promise<User> {
        const user = await this.userRespository.findOne(id);
        if (!user) {
            const errors = { User: 'not found' };
            throw new HttpException({ errors }, 401);
        };
        return await this.userRespository.delete(id);
    }
        async findById(id: number): Promise<UserDate> {
        const user = await this.userRespository.findOne(id);
        if (!user) {
            const errors = {User: 'not found'};
            throw new HttpException({errors}, 401);
        }
        return this.buildUserPO(user);
        }
        public generateJWT(user) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate( today.getDate() + 60);
        return jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            exp: exp.getTime(),
        }, SECRET);
        }
        private buildUserPO(user: User) {
        const userRO = {
            username: user.username,
            email: user.email,
            phone: user.phone,
            token: this.generateJWT(user),
            image: user.image,
        };
        return {user: userRO};
        }
}
