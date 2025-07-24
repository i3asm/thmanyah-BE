import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ItunesProgramResponse } from '../DTO/itunesProgramResponse';

@Entity()
export class Program {
  @PrimaryColumn('bigint')
  trackId: number;
  @Column()
  wrapperType: string;
  @Column()
  kind: string;
  @Column('bigint')
  collectionId: number;
  @Column()
  artistName: string;
  @Column()
  collectionName: string;
  @Column()
  trackName: string;
  @Column()
  collectionCensoredName: string;
  @Column()
  trackCensoredName: string;
  @Column()
  collectionViewUrl: string;
  @Column()
  feedUrl: string;
  @Column()
  trackViewUrl: string;
  @Column()
  artworkUrl30: string;
  @Column()
  artworkUrl60: string;
  @Column()
  artworkUrl100: string;
  @Column()
  collectionPrice: number;
  @Column()
  trackPrice: number;
  @Column()
  collectionHdPrice: number;
  @Column()
  releaseDate: Date;
  @Column()
  collectionExplicitness: string;
  @Column()
  trackExplicitness: string;
  @Column()
  trackCount: number;
  @Column()
  trackTimeMillis: number;
  @Column()
  country: string;
  @Column()
  currency: string;
  @Column()
  primaryGenreName: string;
  @Column()
  contentAdvisoryRating: string;
  @Column()
  artworkUrl600: string;
  @Column()
  genreIds: string;
  // @Column()
  // genres: string[];

  public static fromDto(itunesProgramResponse: ItunesProgramResponse): Program {
    return {
      ...itunesProgramResponse,
    };
  }
}

@Entity()
export class Genre {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
}
