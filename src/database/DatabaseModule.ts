import {Module} from '@nestjs/common';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';
import {ConfigModule} from 'services/config/ConfigModule';
import {IConfigService} from '@spryrocks/config-node';
import {
  Player,
  User,
  LocalLogin,
  Session,
  CareerProgressions,
  PGEventResults,
  PercentileRankings,
  File,
  Ranking,
  Preferences,
  GeneralReports,
  Reports,
  Notification,
  ProReports,
} from 'database/entities';

const entities = [
  Preferences,
  User,
  LocalLogin,
  Session,
  Player,
  File,
  CareerProgressions,
  PGEventResults,
  PercentileRankings,
  Ranking,
  GeneralReports,
  Reports,
  Notification,
  ProReports,
];

const options = (configService: IConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.getNumber('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  synchronize: configService.getBoolean('DATABASE_SYNCHRONIZE', false),
  logging: 'all',
  entities,
});

@Module({
  imports: [
    //
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [IConfigService],
      useFactory: options,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  exports: [
    //
    TypeOrmModule,
  ],
})
export class DatabaseModule {}
