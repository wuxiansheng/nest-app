import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema ({
    userName: String,
    password: String,
    email: String,
    phone: Number,
    nickname: String,
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
});
