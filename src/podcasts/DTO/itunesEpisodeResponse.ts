import { Expose, Type } from 'class-transformer';

@Expose()
export class ItunesEpisodeResponse {
  @Expose()
  artistIds: any[];
  @Expose()
  artworkUrl600: string;
  @Expose()
  collectionViewUrl: string;
  @Expose()
  episodeFileExtension: string;
  @Expose()
  episodeContentType: string;
  @Expose()
  trackTimeMillis: number;
  @Expose()
  artworkUrl160: string;
  @Expose()
  @Type(() => Genre)
  genres: Genre[];
  @Expose()
  episodeGuid: string;
  trackId: number;
  @Expose()
  trackName: string;
  @Expose()
  releaseDate: Date;
  @Expose()
  feedUrl: string;
  @Expose()
  shortDescription: string;
  @Expose()
  closedCaptioning: string;
  @Expose()
  collectionId: number;
  @Expose()
  collectionName: string;
  @Expose()
  kind: string;
  @Expose()
  wrapperType: string;
  @Expose()
  description: string;
  @Expose()
  country: string;
  @Expose()
  previewUrl: string;
  @Expose()
  artworkUrl60: string;
  @Expose()
  contentAdvisoryRating: string;
  @Expose()
  trackViewUrl: string;
  @Expose()
  episodeUrl: string;
}

export class Genre {
  @Expose()
  name: string;
  @Expose()
  id: string;
}
