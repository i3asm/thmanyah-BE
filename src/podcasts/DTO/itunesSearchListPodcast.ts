import { Expose, Type } from 'class-transformer';
import { ItunesPodcastResponse } from './itunesPodcastResponse';

export class ItunesSearchListPodcast {
  @Expose()
  resultCount: number;

  @Type(() => ItunesPodcastResponse)
  @Expose()
  results: ItunesPodcastResponse[];
}
