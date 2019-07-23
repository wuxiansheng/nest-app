import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema ({
    userName: {
        type: String,
        unique: true,
    },
    password: String,
    email: {
        type: String,
        unique: true,
    },
    phone: {
        type: Number,
        unique: true,
    },
    age: {
        type: Number,
        min: 18,
        max: 65,
    },
    nickname:
      {
          type: String,
          unique: true,
      },
    living:  Boolean,
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
});
