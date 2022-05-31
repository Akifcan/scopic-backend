import { ForbiddenException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Auction } from './entity/auction.entity'
import { Product } from '../product/entities/product.entity'

@Injectable()
export class AuctionService {
    @InjectRepository(Auction) readonly auctionRepository: Repository<Auction>
    @InjectRepository(Product) readonly productRepository: Repository<Product>

    async makeOffer(auction: Auction) {
        const { id, price } = await this.productRepository.findOne({ id: auction.product.id })
        const maxBid = await this.findMaxBid(id, price)
        if (auction.bid <= maxBid) {
            throw new ForbiddenException(`Please bid more than ${maxBid}$`)
        }
        return this.auctionRepository.save(this.auctionRepository.create(auction))
    }

    async findMaxBid(productId: number, min: number) {
        const offer = await this.auctionRepository.createQueryBuilder('auction')
            .select("MAX(auction.bid)", "max")
            .where('auction.product.id = :productId', { productId })
            .getRawOne()
        return offer.max || min
    }

}
