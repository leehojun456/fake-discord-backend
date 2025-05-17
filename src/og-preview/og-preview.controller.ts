import { Controller, Get, Query } from '@nestjs/common';
import { OgPreviewService } from './og-preview.service';

@Controller('og-preview')
export class OgPreviewController {
  constructor(private readonly ogPreviewService: OgPreviewService) {}

  @Get()
  async getPreview(@Query('url') url: string) {
    if (!url) return { error: 'Missing url' };

    if (url.includes('pixiv.net')) {
      console.log('pixiv url:', url);
      const data = await this.ogPreviewService.fetchPixieData(url);
      console.log('pixiv data:', data);
      return data || { error: 'Failed to fetch preview' };
    }

    const data = await this.ogPreviewService.fetchOgData(url);
    return data || { error: 'Failed to fetch preview' };
  }
}
