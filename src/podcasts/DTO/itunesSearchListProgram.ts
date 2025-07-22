import { Expose, Type } from 'class-transformer';
import { ItunesProgramResponse } from './itunesProgramResponse';

export class ItunesSearchListProgram {
  @Expose()
  resultCount: number;

  @Type(() => ItunesProgramResponse)
  @Expose()
  results: ItunesProgramResponse[];
}
