import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true }));

  const port = process.env.PORT || 3030;
  await app.listen(port, '0.0.0.0');

  const DB_PASSWORD = process.env.DB_PASSWORD || 3000;
  const DB_USER = process.env.DB_USER || 3000;
  const DB_SCHEMA = process.env.DB_SCHEMA || 3000;
  const DB_HOST = process.env.DB_HOST || 3000;
  console.log(`Listening on port ${port}, ${DB_USER}, ${DB_PASSWORD}, ${DB_SCHEMA}, ${DB_HOST}`);
}

bootstrap();
