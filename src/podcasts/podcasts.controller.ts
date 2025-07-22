import { Controller, Get, Param, Query } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Get()
  findAll() {
    return this.podcastsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.podcastsService.findOne(+id);
  }

  @Get('search')
  search(@Query('term') term: string) {
    return this.podcastsService.searchFor(term);
  }
}
