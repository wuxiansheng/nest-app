import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { DatabaseModule } from '../../../config/mysql.module';
import { CustomerController } from './customer.controller';
import { customerProviders } from './customer.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [
    CustomerService,
    ...customerProviders,
  ],
})
export class CustomerModule {}
