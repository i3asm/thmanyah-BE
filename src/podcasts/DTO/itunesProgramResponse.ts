import { Expose } from 'class-transformer';
import { Program } from '../entities/Program.entity';

export class ItunesProgramResponse {
  @Expose()
  wrapperType: string;
  @Expose()
  kind: string;
  @Expose()
  collectionId: number;
  @Expose()
  trackId: number;
  @Expose()
  artistName: string;
  @Expose()
  collectionName: string;
  @Expose()
  trackName: string;
  @Expose()
  collectionCensoredName: string;
  @Expose()
  trackCensoredName: string;
  @Expose()
  collectionViewUrl: string;
  @Expose()
  feedUrl: string;
  @Expose()
  trackViewUrl: string;
  @Expose()
  artworkUrl30: string;
  @Expose()
  artworkUrl60: string;
  @Expose()
  artworkUrl100: string;
  @Expose()
  collectionPrice: number;
  @Expose()
  trackPrice: number;
  @Expose()
  collectionHdPrice: number;
  @Expose()
  releaseDate: Date;
  @Expose()
  @Expose()
  collectionExplicitness: string;
  @Expose()
  trackExplicitness: string;
  @Expose()
  @Expose()
  trackCount: number;
  @Expose()
  trackTimeMillis: number;
  @Expose()
  country: string;
  @Expose()
  currency: string;
  @Expose()
  primaryGenreName: string;
  @Expose()
  contentAdvisoryRating: string;
  @Expose()
  artworkUrl600: string;
  @Expose()
  genreIds: string;
  @Expose()
  genres: string[];

}
