import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PodcastsService {
  constructor(private http: HttpService) {}

  urls = {
    itunes: 'https://itunes.apple.com/search',
  };

  findAll() {
    return `This action returns all podcasts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} podcast`;
  }

  searchFor(term: string) {
    this.http.get(this.urls.itunes);
    return `looking for a podcast with the term ${term}...`;
  }
}
