import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  app.setGlobalPrefix('api');

  const corsOptions = {
    origin: true,
    credentials: true,
    exposedHeaders: ['set-cookie'],
  };

  app.enableCors(corsOptions);

  await app.listen(configService.get<number>('port'));
}
bootstrap();
