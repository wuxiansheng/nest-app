import { Module } from '@nestjs/common';
import { CustomerLostController } from './customer-lost.controller';
import { CustomerLostService } from './customer-lost.service';

@Module({
  controllers: [CustomerLostController],
  providers: [CustomerLostService]
})
export class CustomerLostModule {}
