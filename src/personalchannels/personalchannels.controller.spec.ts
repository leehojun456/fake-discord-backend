import { Test, TestingModule } from '@nestjs/testing';
import { PersonalchannelsController } from './personalchannels.controller';
import { PersonalchannelsService } from './personalchannels.service';

describe('PersonalchannelsController', () => {
  let controller: PersonalchannelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalchannelsController],
      providers: [PersonalchannelsService],
    }).compile();

    controller = module.get<PersonalchannelsController>(PersonalchannelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
