import { Test, TestingModule } from '@nestjs/testing';
import { PermissionItemsController } from './permission-items.controller';

describe('PermissionItems Controller', () => {
  let controller: PermissionItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissionItemsController],
    }).compile();

    controller = module.get<PermissionItemsController>(PermissionItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
