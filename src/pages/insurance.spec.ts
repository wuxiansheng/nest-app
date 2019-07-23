import { Test, TestingModule } from '@nestjs/testing';
import { Insurance } from './insurance';

describe('Insurance', () => {
  let provider: Insurance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Insurance],
    }).compile();

    provider = module.get<Insurance>(Insurance);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
