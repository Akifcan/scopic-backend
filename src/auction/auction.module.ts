import { Module } from '@nestjs/common'
import { AuctionController } from './auction.controller'
import { Auction } from './auction.entity'
import { AuctionService } from './auction.service'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Auction])],
  controllers: [AuctionController],
  providers: [AuctionService]
})
export class AuctionModule { }
