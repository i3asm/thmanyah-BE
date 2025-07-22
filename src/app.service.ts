import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    // the only reason this is here is that I want to test using env vars for both local dev and docker containers.
    const port: string = this.configService.get<string>('PORT', '3000');
    const env: string = this.configService.get<string>('NODE_ENV', 'development');

    return `Hello World! Running on port ${port} in ${env} mode`;
  }
}
