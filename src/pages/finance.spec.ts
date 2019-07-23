import { Test, TestingModule } from '@nestjs/testing';
import { Finance } from './finance';

describe('Finance', () => {
  let provider: Finance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Finance],
    }).compile();

    provider = module.get<Finance>(Finance);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
