import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, forkJoin, map } from 'rxjs';
import { ItunesSearchListEpisode } from './DTO/itunesSearchListEpisode';
import { ItunesSearchListProgram } from './DTO/itunesSearchListProgram';
import { itunesSearchResponse } from './DTO/itunesSearchResponse';

@Injectable()
export class PodcastsService {
  constructor(private http: HttpService) {}

  urls = {
    itunes: 'https://itunes.apple.com/search',
  };

  findAll() {
    return `This action returns all podcasts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} podcast`;
  }

  async searchFor(term: string, lang: string, limit: number): Promise<itunesSearchResponse> {
    const episodes = this.http
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

    const programs = this.http
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

    return await firstValueFrom(forkJoin({ episodes: episodes, programs: programs }));
  }
}
