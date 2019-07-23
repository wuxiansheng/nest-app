import { Test, TestingModule } from '@nestjs/testing';
import { CustomerLostService } from './customer-lost.service';

describe('CustomerLostService', () => {
  let service: CustomerLostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerLostService],
    }).compile();

    service = module.get<CustomerLostService>(CustomerLostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
