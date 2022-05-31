import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import configuration from './config/configuration'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductModule } from './product/product.module';
import { AuctionModule } from './auction/auction.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('db.postgres.url'),
        port: configService.get<number>('db.postgres.port'),
        username: configService.get<string>('db.postgres.user'),
        password: configService.get<string>('db.postgres.password'),
        database: configService.get<string>('db.postgres.database'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ProductModule,
    AuctionModule],
})
export class AppModule { }
