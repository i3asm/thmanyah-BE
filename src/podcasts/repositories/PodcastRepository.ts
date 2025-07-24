import { itunesSearchResponse } from '../DTO/itunesSearchResponse';
import { Injectable } from '@nestjs/common';

export interface IPodcastRepository {
  search(term: string, lang: string, limit: number): Promise<itunesSearchResponse>;
}

// export const USERS_REPOSITORY = Symbol('USERS_REPOSITORY'); //TODO: remove this??

@Injectable()
export class PodcastRepository implements IPodcastRepository {
  //TODO: add caching from postgres

  search(term: string, lang: string, limit: number): Promise<itunesSearchResponse> {
    throw new Error('Method not implemented.');
  }
}
