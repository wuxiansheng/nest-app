import { Test, TestingModule } from '@nestjs/testing';
import { ImpeachReportsController } from './impeach-reports.controller';

describe('ImpeachReports Controller', () => {
  let controller: ImpeachReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpeachReportsController],
    }).compile();

    controller = module.get<ImpeachReportsController>(ImpeachReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
