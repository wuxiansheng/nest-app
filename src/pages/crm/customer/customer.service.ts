import {  Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  /**
   * 创建 customr
   */
  async create(): Promise<Customer> {
    const customer = new Customer();
    return await this.customerRepository.save(customer);
  }
  async findAll(): Promise<Customer[]> {
    return  await this.customerRepository.find();
  }
  async findOne(id: string): Promise<Customer> {
    return await this.customerRepository.findOne(id);
  }
}
