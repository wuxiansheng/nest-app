import { Test, TestingModule } from '@nestjs/testing';
import { NoticeSettingsController } from './notice-settings.controller';

describe('NoticeSettings Controller', () => {
  let controller: NoticeSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticeSettingsController],
    }).compile();

    controller = module.get<NoticeSettingsController>(NoticeSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
