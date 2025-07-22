import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { PodcastsController } from './podcasts.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [PodcastsController],
  providers: [PodcastsService, ClassSerializerInterceptor],
  imports: [HttpModule],
})
export class PodcastsModule {}
