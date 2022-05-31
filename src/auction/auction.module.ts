import { Module } from '@nestjs/common'
import { AuctionController } from './auction.controller'
import { Auction } from './entity/auction.entity'
import { AuctionService } from './auction.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from '../product/entities/product.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Auction, Product])],
  controllers: [AuctionController],
  providers: [AuctionService]
})
export class AuctionModule { }
