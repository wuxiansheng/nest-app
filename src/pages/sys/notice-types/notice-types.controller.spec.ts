import { Test, TestingModule } from '@nestjs/testing';
import { NoticeTypesController } from './notice-types.controller';

describe('NoticeTypes Controller', () => {
  let controller: NoticeTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticeTypesController],
    }).compile();

    controller = module.get<NoticeTypesController>(NoticeTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
