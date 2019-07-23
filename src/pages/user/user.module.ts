
import { MongoDbModule } from './../../config/mongodb.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
    imports: [MongoDbModule],
    controllers: [UserController],
    providers: [UserService, ...userProviders],
})
export class UserModule {}
