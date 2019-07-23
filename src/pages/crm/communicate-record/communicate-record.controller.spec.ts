import { Test, TestingModule } from '@nestjs/testing';
import { CommunicateRecordController } from './communicate-record.controller';

describe('CommunicateRecord Controller', () => {
  let controller: CommunicateRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommunicateRecordController],
    }).compile();

    controller = module.get<CommunicateRecordController>(CommunicateRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
