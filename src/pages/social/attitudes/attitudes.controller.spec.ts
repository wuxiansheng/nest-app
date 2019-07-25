import { Test, TestingModule } from '@nestjs/testing';
import { AttitudesController } from './attitudes.controller';

describe('Attitudes Controller', () => {
  let controller: AttitudesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttitudesController],
    }).compile();

    controller = module.get<AttitudesController>(AttitudesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
