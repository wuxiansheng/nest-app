import { Test, TestingModule } from '@nestjs/testing';
import { AttitudeRecordsController } from './attitude-records.controller';

describe('AttitudeRecords Controller', () => {
  let controller: AttitudeRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttitudeRecordsController],
    }).compile();

    controller = module.get<AttitudeRecordsController>(AttitudeRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
