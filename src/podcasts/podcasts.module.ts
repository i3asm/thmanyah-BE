import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { PodcastsController } from './podcasts.controller';
import { EpisodesModule } from './episodes/episodes.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [PodcastsController],
  providers: [PodcastsService, ClassSerializerInterceptor],
  imports: [EpisodesModule, HttpModule],
})
export class PodcastsModule {}
