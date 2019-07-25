import { Test, TestingModule } from '@nestjs/testing';
import { MessageInSessionsController } from './message-in-sessions.controller';

describe('MessageInSessions Controller', () => {
  let controller: MessageInSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageInSessionsController],
    }).compile();

    controller = module.get<MessageInSessionsController>(MessageInSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
