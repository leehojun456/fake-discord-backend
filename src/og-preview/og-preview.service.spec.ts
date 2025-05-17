import { Test, TestingModule } from '@nestjs/testing';
import { OgPreviewService } from './og-preview.service';

describe('OgPreviewService', () => {
  let service: OgPreviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OgPreviewService],
    }).compile();

    service = module.get<OgPreviewService>(OgPreviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
