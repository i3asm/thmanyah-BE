import { Expose, Type } from 'class-transformer';
import { ItunesSearchListEpisode } from './itunesSearchListEpisode';
import { ItunesSearchListPodcast } from './itunesSearchListPodcast';

export class itunesSearchResponse {
  @Type(() => ItunesSearchListEpisode)
  @Expose()
  episodes: ItunesSearchListEpisode;

  @Type(() => ItunesSearchListPodcast)
  @Expose()
  podcasts: ItunesSearchListPodcast;
}

// export class itunesSearchResponse {
//   @Type(() => itunesSearchList)
//   @Expose()
//   episodes: itunesSearchList;
//
//   @Type(() => itunesSearchList)
//   @Expose()
//   podcasts: itunesSearchList;
// }
