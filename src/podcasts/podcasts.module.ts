import { Module } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { PodcastsController } from './podcasts.controller';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  controllers: [PodcastsController],
  providers: [PodcastsService],
  imports: [EpisodesModule],
})
export class PodcastsModule {}
