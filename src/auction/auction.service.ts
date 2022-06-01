import { ForbiddenException, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Auction } from './entity/auction.entity'
import { Product } from '../product/entities/product.entity'
import ProductTransformer from '../product/product.transformer'

@Injectable()
export class AuctionService {

    @InjectRepository(Auction) readonly auctionRepository: Repository<Auction>
    @InjectRepository(Product) readonly productRepository: Repository<Product>
    @Inject() readonly productTransformer: ProductTransformer

    async makeOffer(auction: Auction) {
        const { id, price, status } = this.productTransformer.productToPublicEntity(await this.productRepository.findOne({ id: auction.product.id }))
        const maxBid = await this.findMaxBid(id, price)

        if (status != 'active') {
            throw new ForbiddenException(`Status of this auction is ${status}`)
        }

        if (auction.bid <= maxBid) {
            throw new ForbiddenException(`Please bid more than ${maxBid}$`)
        }
        return this.auctionRepository.save(this.auctionRepository.create(auction))
    }

    listBids(productId: number) {
        return this.auctionRepository.find({
            where: {
                product: { id: productId }
            },
            order: { createdAt: -1 }
        })
    }

    async findMaxBid(productId: number, min: number) {
        const offer = await this.auctionRepository.createQueryBuilder('auction')
            .select("MAX(auction.bid)", "max")
            .where('auction.product.id = :productId', { productId })
            .getRawOne()
        return offer.max || min
    }

}
