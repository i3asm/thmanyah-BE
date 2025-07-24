import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { PodcastsController } from './podcasts.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre, Program } from './entities/Program.entity';
import { Episode } from './entities/Episode.entity';
import { Cache } from './entities/Cache.entity';

@Module({
  controllers: [PodcastsController],
  providers: [PodcastsService, ClassSerializerInterceptor],
  imports: [HttpModule, TypeOrmModule.forFeature([Program, Episode, Genre, Cache])],
})
export class PodcastsModule {}
