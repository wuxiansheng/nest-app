import { Document } from 'mongoose';
export interface User extends Document {
    readonly userName: string;
    readonly password: string;
    readonly email: string;
    readonly phone: string;
    readonly nickname: string;
    readonly createdAt: string;
    readonly updatedAt: string;
}
