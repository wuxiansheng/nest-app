import { Inject } from '@nestjs/common';
import { Connection } from 'mongoose';
import { UserSchema} from './user.schema'
export const userProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['MONGODBDATABASE_CONNECTION'],
    }
]