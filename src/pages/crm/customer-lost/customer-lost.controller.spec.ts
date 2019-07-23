import { Test, TestingModule } from '@nestjs/testing';
import { CustomerLostController } from './customer-lost.controller';

describe('CustomerLost Controller', () => {
  let controller: CustomerLostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerLostController],
    }).compile();

    controller = module.get<CustomerLostController>(CustomerLostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
