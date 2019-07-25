import { Test, TestingModule } from '@nestjs/testing';
import { MessageSessionsController } from './message-sessions.controller';

describe('MessageSessions Controller', () => {
  let controller: MessageSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageSessionsController],
    }).compile();

    controller = module.get<MessageSessionsController>(MessageSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
