import { Column, PrimaryColumn } from 'typeorm';

export class Program {
  @PrimaryColumn()
  trackId: number;
  @Column()
  wrapperType: string;
  @PrimaryColumn()
  kind: string;
  @PrimaryColumn()
  collectionId: number;
  @PrimaryColumn()
  artistName: string;
  @PrimaryColumn()
  collectionName: string;
  @PrimaryColumn()
  trackName: string;
  @PrimaryColumn()
  collectionCensoredName: string;
  @PrimaryColumn()
  trackCensoredName: string;
  @PrimaryColumn()
  collectionViewUrl: string;
  @PrimaryColumn()
  feedUrl: string;
  @PrimaryColumn()
  trackViewUrl: string;
  @PrimaryColumn()
  artworkUrl30: string;
  @PrimaryColumn()
  artworkUrl60: string;
  @PrimaryColumn()
  artworkUrl100: string;
  @PrimaryColumn()
  collectionPrice: number;
  @PrimaryColumn()
  trackPrice: number;
  @PrimaryColumn()
  collectionHdPrice: number;
  @PrimaryColumn()
  releaseDate: Date;
  @PrimaryColumn()
  collectionExplicitness: string;
  @PrimaryColumn()
  trackExplicitness: string;
  @PrimaryColumn()
  trackCount: number;
  @PrimaryColumn()
  trackTimeMillis: number;
  @PrimaryColumn()
  country: string;
  @PrimaryColumn()
  currency: string;
  @PrimaryColumn()
  primaryGenreName: string;
  @PrimaryColumn()
  contentAdvisoryRating: string;
  @PrimaryColumn()
  artworkUrl600: string;
  @PrimaryColumn()
  genreIds: string[];
  @PrimaryColumn()
  genres: string[];
}
