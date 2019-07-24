import { Connection, Repository } from 'typeorm';
import { Customer } from '../../../../dist/pages/crm/customer/customer.entity';
export  const customerProviders = [
  {
    provider: 'CustomerRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Customer),
    inject: ['MysqlConnectionToken'],
  },
];
