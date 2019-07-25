import { Test, TestingModule } from '@nestjs/testing';
import { NoticeTypesService } from './notice-types.service';

describe('NoticeTypesService', () => {
  let service: NoticeTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticeTypesService],
    }).compile();

    service = module.get<NoticeTypesService>(NoticeTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
