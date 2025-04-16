import { Test, TestingModule } from '@nestjs/testing';
import { PersonalchannelsService } from './personalchannels.service';

describe('PersonalchannelsService', () => {
  let service: PersonalchannelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalchannelsService],
    }).compile();

    service = module.get<PersonalchannelsService>(PersonalchannelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
