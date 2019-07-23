import { createConnection } from 'typeorm';

export const mysqlProviders = [
  {
    provide: 'MysqlConnectionToken',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'wxs3430569',
      database: 'nest',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];
