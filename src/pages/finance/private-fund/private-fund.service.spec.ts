import { Test, TestingModule } from '@nestjs/testing';
import { PrivateFundService } from './private-fund.service';

describe('PrivateFundService', () => {
  let service: PrivateFundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrivateFundService],
    }).compile();

    service = module.get<PrivateFundService>(PrivateFundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
