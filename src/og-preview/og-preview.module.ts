import { Module } from '@nestjs/common';
import { OgPreviewController } from './og-preview.controller';
import { OgPreviewService } from './og-preview.service';

@Module({
  controllers: [OgPreviewController],
  providers: [OgPreviewService],
})
export class OgPreviewModule {}
