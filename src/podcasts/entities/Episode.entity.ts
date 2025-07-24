import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ItunesEpisodeResponse } from '../DTO/itunesEpisodeResponse';

@Entity()
export class Episode {
  @PrimaryColumn('bigint')
  trackId: number;
  @Column()
  artworkUrl600: string;
  @Column()
  collectionViewUrl: string;
  @Column()
  episodeFileExtension: string;
  @Column()
  episodeContentType: string;
  @Column()
  trackTimeMillis: number;
  @Column()
  artworkUrl160: string;
  @Column()
  episodeGuid: string;
  @Column()
  trackName: string;
  @Column()
  releaseDate: Date;
  @Column()
  feedUrl: string;
  @Column()
  shortDescription: string;
  @Column()
  closedCaptioning: string;
  @Column('bigint')
  collectionId: number;
  @Column()
  collectionName: string;
  @Column()
  kind: string;
  @Column()
  wrapperType: string;
  @Column()
  description: string;
  @Column()
  country: string;
  @Column()
  previewUrl: string;
  @Column()
  artworkUrl60: string;
  @Column()
  contentAdvisoryRating: string;
  @Column()
  trackViewUrl: string;
  @Column()
  episodeUrl: string;

  public static fromDto(itunesEpisodeResponse: ItunesEpisodeResponse): Episode {
    return {
      ...itunesEpisodeResponse,
    };
  }
}
