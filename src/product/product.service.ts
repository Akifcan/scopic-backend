import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './entities/product.entity'
import ProductTransformer from './product.transformer'

@Injectable()
export class ProductService {
    @InjectRepository(Product) readonly productRepository: Repository<Product>
    @Inject() readonly productTransformer: ProductTransformer

    create(product: Product) {
        return this.productRepository.save(this.productRepository.create(product))
    }

    async list(search: { keyword?: string, sort?: 'DESC' | 'ASC', page: number }) {
        const limit = 10

        const query = this.productRepository.createQueryBuilder('product')
            .skip((search.page - 1) * limit)
            .take(limit)
            .orderBy('product.name', 'ASC')

        if (search.keyword) {
            query.where('LOWER(product.name) like :name', { name: `%${search.keyword.toLowerCase()}%` })
        }

        if (search.sort) {
            query.orderBy('product.price', search.sort)
        }
        const totalRecord = await query.getCount()

        return {
            total: Math.ceil(totalRecord / limit),
            data: this.productTransformer.productsToPublicEntity(await query.getMany())
        }
    }

    async find(id: number) {
        return this.productTransformer.productToPublicEntity(await this.productRepository.findOne({ id }))
    }

    deleteProduct(id: number) {
        return this.productRepository.delete({ id })
    }
}
