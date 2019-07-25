import { Test, TestingModule } from '@nestjs/testing';
import { SpecialContentItemsController } from './special-content-items.controller';

describe('SpecialContentItems Controller', () => {
  let controller: SpecialContentItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialContentItemsController],
    }).compile();

    controller = module.get<SpecialContentItemsController>(SpecialContentItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
