import { Expose, Type } from 'class-transformer';
import { ItunesEpisodeResponse } from './itunesEpisodeResponse';

export class ItunesSearchListEpisode {
  @Expose()
  resultCount: number;

  @Type(() => ItunesEpisodeResponse)
  @Expose()
  results: ItunesEpisodeResponse[];
}
