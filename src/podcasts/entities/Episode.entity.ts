import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Episode {
  @PrimaryColumn()
  trackId: number;
  @Column()
  artistIds: any[];
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
  genres: Genre[];
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
  @Column()
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
}

export class Genre {
  name: string;
  id: string;
}
