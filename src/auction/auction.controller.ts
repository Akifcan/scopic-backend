import { Body, Controller, Inject, Post } from '@nestjs/common'
import { AuctionService } from './auction.service'
import { Auction } from './entity/auction.entity'

@Controller('auction')
export class AuctionController {

    @Inject() readonly auctionService: AuctionService

    @Post()
    create(@Body() auction: Auction) {
        return this.auctionService.makeOffer(auction)
    }

}
