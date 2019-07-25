import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';

import { CustomerController } from './customer.controller';
import { customerProviders } from './customer.providers';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [
    CustomerService,
  ],
})
export class CustomerModule {}
