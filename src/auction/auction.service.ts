import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Auction } from './auction.entity'

@Injectable()
export class AuctionService {
    @InjectRepository(Auction) readonly productRepository: Repository<Auction>



}
