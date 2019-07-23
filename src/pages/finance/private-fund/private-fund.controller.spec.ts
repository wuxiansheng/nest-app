import { Test, TestingModule } from '@nestjs/testing';
import { PrivateFundController } from './private-fund.controller';

describe('PrivateFund Controller', () => {
  let controller: PrivateFundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivateFundController],
    }).compile();

    controller = module.get<PrivateFundController>(PrivateFundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
