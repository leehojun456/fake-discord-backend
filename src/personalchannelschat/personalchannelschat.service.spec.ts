import { Test, TestingModule } from '@nestjs/testing';
import { PersonalchannelschatService } from './personalchannelschat.service';

describe('PersonalchannelschatService', () => {
  let service: PersonalchannelschatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalchannelschatService],
    }).compile();

    service = module.get<PersonalchannelschatService>(PersonalchannelschatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
