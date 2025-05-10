import { Test, TestingModule } from '@nestjs/testing';
import { PersonalchannelschatController } from './personalchannelschat.controller';
import { PersonalchannelschatService } from './personalchannelschat.service';

describe('PersonalchannelschatController', () => {
  let controller: PersonalchannelschatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalchannelschatController],
      providers: [PersonalchannelschatService],
    }).compile();

    controller = module.get<PersonalchannelschatController>(PersonalchannelschatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
