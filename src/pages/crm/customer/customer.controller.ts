import { Controller, Get, Inject } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(
    @InjectRepository(Customer)
    private readonly customerService: CustomerService,
  ) {}
  @Get()
  async findAll(): Promise<Customer[]> {
    return await this.customerService.findAll();
  }
  @Get()
  async findOne(id: string): Promise<Customer> {
    return await this.customerService.findOne(id);
  }
}
