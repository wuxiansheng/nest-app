import { Test, TestingModule } from '@nestjs/testing';
import { CommunicateRecordService } from './communicate-record.service';

describe('CommunicateRecordService', () => {
  let service: CommunicateRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommunicateRecordService],
    }).compile();

    service = module.get<CommunicateRecordService>(CommunicateRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
