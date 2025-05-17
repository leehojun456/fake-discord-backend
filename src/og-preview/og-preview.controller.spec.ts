import { Test, TestingModule } from '@nestjs/testing';
import { OgPreviewController } from './og-preview.controller';

describe('OgPreviewController', () => {
  let controller: OgPreviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OgPreviewController],
    }).compile();

    controller = module.get<OgPreviewController>(OgPreviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
