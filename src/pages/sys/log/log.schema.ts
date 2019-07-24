import * as mongoose from 'mongoose';
export const LogSchema = new mongoose.Schema({
    index: Number,
    nickname: String,
    userId: String,
    date: {
        type: Date,
        default: Date.now,
    },
    // request
    method: String,
    host: String,
    url: String,

    // response
    status: Number,
    desc: String,
});
