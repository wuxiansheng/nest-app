import { Test, TestingModule } from '@nestjs/testing';
import { SpecialContentTypesController } from './special-content-types.controller';

describe('SpecialContentTypes Controller', () => {
  let controller: SpecialContentTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialContentTypesController],
    }).compile();

    controller = module.get<SpecialContentTypesController>(SpecialContentTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
