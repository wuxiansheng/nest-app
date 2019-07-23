import * as mongoose from 'mongoose';

export const mongodbProviders = [
  {
    provide: 'MONGODBDATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/nest', {useNewUrlParser: true , useCreateIndex: true}),
  },
];
