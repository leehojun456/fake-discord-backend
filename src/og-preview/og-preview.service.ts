import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as puppeteer from 'puppeteer';

@Injectable()
export class OgPreviewService {
  async fetchOgData(url: string) {
    try {
      const { data: html } = await axios.get(url, {
        headers: { 'User-Agent': 'Googlebot' }, // 일부 사이트는 UA 확인함
      });

      const $ = cheerio.load(html);

      const getMeta = (prop: string) =>
        $(`meta[property='og:${prop}']`).attr('content') ||
        $(`meta[name='og:${prop}']`).attr('content');

      return {
        title: getMeta('title') || $('title').text(),
        description: getMeta('description') || '',
        image: getMeta('image') || '',
        url,
      };
    } catch (error) {
      console.error('OG fetch failed:', error.message);
      return null;
    }
  }

  async fetchPixieData(url: string) {
    // '#' 이후 해시 제거
    const cleanUrl = url.split('#')[0];

    // 'artworks/' 뒤 숫자만 추출
    const match = cleanUrl.match(/artworks\/(\d+)/);
    const id = match ? match[1] : null;
    if (!id) {
      console.error('Invalid Pixiv URL:', url);
      return null;
    }
    //
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          Referer: 'https://www.pixiv.net/',
        },
      });

      if (!response || !response.data) {
        throw new Error('No response data');
      }

      const $ = cheerio.load(response.data);
      //   console.log('jsonData:', $.html());

      const siteName = $('meta[property="og:site_name"]').attr('content') || '';

      const ogTitle = $('meta[property="twitter:title"]').attr('content') || '';

      // og:image
      const ogImage = $('meta[property="og:image"]').attr('content') || '';

      // description
      const description =
        $('meta[property="twitter:description"]').attr('content') || '';

      return {
        site: siteName,
        title: ogTitle,
        description: description,
        image: ogImage,
      };
    } catch (err) {
      console.error('Pixiv fetch error:', err.message);
    }
  }
}
