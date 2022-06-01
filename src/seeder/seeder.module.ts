import { Module } from '@nestjs/common'
import { SeederService } from './seeder.service'
import { SeederController } from './seeder.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Auction } from '../auction/entity/auction.entity'
import { Product } from '../product/entities/product.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Auction, Product])],
  providers: [SeederService],
  controllers: [SeederController]
})
export class SeederModule { }
