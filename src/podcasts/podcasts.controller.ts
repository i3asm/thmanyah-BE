import { Controller, Get, Query } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { ItunesSearchResponse } from './DTO/itunesSearchResponse';
import { plainToInstance } from 'class-transformer';

// @UseInterceptors(ClassSerializerInterceptor)
@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Get('search')
  async search(@Query('term') term: string, @Query('lang') lang: string = 'ar_sa', @Query('limit') limit: number = 50) {
    const plainResult = await this.podcastsService.searchFor(term, lang, limit);
    return plainToInstance(ItunesSearchResponse, plainResult, { excludeExtraneousValues: true });
  }
}
