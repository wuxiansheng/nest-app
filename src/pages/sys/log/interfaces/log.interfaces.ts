import { Document } from 'mongoose';
export interface Log extends Document {
    readonly index: number;
    readonly nickname: string;
    readonly userId: string;
    readonly date: string;
    readonly method: string;
    readonly host: string;
    readonly url: string;
    readonly status: string;
    readonly desc: string;
}
