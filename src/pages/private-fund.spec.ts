import { Test, TestingModule } from '@nestjs/testing';
import { PrivateFund } from './private-fund';

describe('PrivateFund', () => {
  let provider: PrivateFund;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrivateFund],
    }).compile();

    provider = module.get<PrivateFund>(PrivateFund);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
