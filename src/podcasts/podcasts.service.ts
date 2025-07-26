import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, forkJoin, map, Observable, of } from 'rxjs';
import { ItunesSearchListEpisode } from './DTO/itunesSearchListEpisode';
import { ItunesSearchListProgram } from './DTO/itunesSearchListProgram';
import { ItunesSearchResponse } from './DTO/itunesSearchResponse';
import { Program } from './entities/Program.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Episode } from './entities/Episode.entity';
import { MoreThan, Repository } from 'typeorm';
import { ItunesProgramResponse } from './DTO/itunesProgramResponse';
import { ItunesEpisodeResponse } from './DTO/itunesEpisodeResponse';
import { Cache } from './entities/Cache.entity';

@Injectable()
export class PodcastsService {
  constructor(
    @InjectRepository(Program) private programRepository: Repository<Program>,
    @InjectRepository(Episode) private episodeRepository: Repository<Episode>,
    @InjectRepository(Cache) private cacheRepository: Repository<Cache>,
    private http: HttpService,
  ) {}

  private readonly logger = new Logger(PodcastsService.name);

  urls = {
    itunes: 'https://itunes.apple.com/search',
  };

  findAll() {
    return `This action returns all podcasts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} podcast`;
  }

  async searchFor(term: string, lang: string, limit: number): Promise<ItunesSearchResponse> {
    let episodesObservable: Observable<ItunesSearchListEpisode>;
    const cachedEpisodesResponse = await this.getCachedResponse(`itunes-episodes-${term}-${lang}-${limit}`);

    if (cachedEpisodesResponse !== null) {
      episodesObservable = of(JSON.parse(cachedEpisodesResponse.json) as ItunesSearchListEpisode);
    } else {
      episodesObservable = this.http
        .get<ItunesSearchListEpisode>(this.urls.itunes, {
          params: {
            term: term,
            country: 'SA',
            media: 'podcast',
            entity: 'podcastEpisode',
            attribute: ['titleTerm', 'authorTerm', 'artistTerm'],
            lang: lang,
            explicit: 'No',
            limit: limit,
          },
        })
        .pipe(map((res) => res.data));

      episodesObservable.subscribe((episodes) => {
        this.saveCachedResponse(`itunes-episodes-${term}-${lang}-${limit}`, episodes)
          .then(() => this.logger.log('done with saving episodesObservable cache'))
          .catch((reason) => this.logger.error(reason));
        this.saveEpisodes(episodes.results)
          .then(() => this.logger.log('done with saving episodesObservable'))
          .catch((reason) => this.logger.error(reason));
      });
    }

    let programsObservable: Observable<ItunesSearchListProgram>;
    const cachedProgramsResponse = await this.getCachedResponse(`itunes-programs-${term}-${lang}-${limit}`);

    if (cachedProgramsResponse !== null) {
      programsObservable = of(JSON.parse(cachedProgramsResponse.json) as ItunesSearchListProgram);
    } else {
      programsObservable = this.http
        .get<ItunesSearchListProgram>(this.urls.itunes, {
          params: {
            term: term,
            country: 'SA',
            media: 'podcast',
            entity: 'podcast',
            attribute: ['titleTerm', 'authorTerm', 'artistTerm'],
            lang: lang,
            explicit: 'No',
            limit: limit,
          },
        })
        .pipe(map((res) => res.data));

      programsObservable.subscribe((programs) => {
        this.saveCachedResponse(`itunes-programs-${term}-${lang}-${limit}`, programs)
          .then(() => this.logger.log('done with saving programsObservable cache'))
          .catch((reason) => this.logger.error(reason));

        this.savePrograms(programs.results)
          .then(() => this.logger.log('done with saving programsObservable'))
          .catch((reason) => this.logger.error(reason));
      });
    }

    return await firstValueFrom(forkJoin({ episodes: episodesObservable, programs: programsObservable }));
  }

  private async saveCachedResponse(key: string, response: any) {
    const cache: Cache = {
      key: key,
      json: JSON.stringify(response),
      created_at: new Date(),
      expires_at: new Date(Date.now() + 30 * 60 * 1000),
    };
    await this.cacheRepository.save(cache);
  }

  private async getCachedResponse(key: string) {
    return await this.cacheRepository.findOneBy({ key: key, expires_at: MoreThan(new Date()) });
  }

  private async savePrograms(programs: ItunesProgramResponse[]) {
    for (const programResponse of programs) {
      const program = Program.fromDto(programResponse);
      await this.programRepository.save(program).catch((reason) => this.logger.error(reason));
    }
  }

  private async saveEpisodes(episodes: ItunesEpisodeResponse[]) {
    for (const episodeResponse of episodes) {
      const episode = Episode.fromDto(episodeResponse);
      await this.episodeRepository.save(episode).catch((reason) => this.logger.error(reason));
    }
  }
}
