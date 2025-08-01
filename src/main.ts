import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true }));

  const port = process.env.PORT || 3030;
  if (process.env.NODE_ENV == 'development') {
    app.enableCors();
  }
  app.enableCors({
    origin: ['https://thmanyah.i3asm.xyz'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });
  await app.listen(port, '0.0.0.0');

  const DB_PASSWORD = process.env.DB_PASSWORD || 3000;
  const DB_USER = process.env.DB_USER || 3000;
  const DB_NAME = process.env.DB_NAME || 3000;
  const DB_HOST = process.env.DB_HOST || 3000;
  const DB_PORT = process.env.DB_PORT || 3000;
  console.log(`starting ${port}, ${DB_USER}, ${DB_PASSWORD}, ${DB_NAME}, ${DB_HOST}, ${DB_PORT}`);
}

bootstrap();
