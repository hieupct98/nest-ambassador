import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const createMainDatabaseConfiguration = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: configService.get<string>('database.main.host'),
    port: configService.get<number>('database.main.port'),
    username: configService.get<string>('database.main.username'),
    password: configService.get<string>('database.main.password'),
    database: configService.get<string>('database.main.database'),
    autoLoadEntities: true,
    synchronize: true,
  };
};

export const createTestDatabaseConfiguration = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: configService.get<string>('database.test.host'),
    port: configService.get<number>('database.test.port'),
    username: configService.get<string>('database.test.username'),
    password: configService.get<string>('database.test.password'),
    database: configService.get<string>('database.test.database'),
    autoLoadEntities: true,
    synchronize: true,
  };
};
