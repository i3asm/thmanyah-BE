import { Expose, Type } from 'class-transformer';
import { ItunesSearchListEpisode } from './itunesSearchListEpisode';
import { ItunesSearchListProgram } from './itunesSearchListProgram';

export class ItunesSearchResponse {
  @Type(() => ItunesSearchListEpisode)
  @Expose()
  episodes: ItunesSearchListEpisode;

  @Type(() => ItunesSearchListProgram)
  @Expose()
  programs: ItunesSearchListProgram;

  public static toDto(itunesSearchResponse: ItunesSearchResponse): ItunesSearchResponse {
    return { ...itunesSearchResponse };
  }
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
