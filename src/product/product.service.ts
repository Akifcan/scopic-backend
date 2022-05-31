import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './entities/product.entity'

@Injectable()
export class ProductService {
    @InjectRepository(Product) private productRepository: Repository<Product>

    create(product: Product) {
        return this.productRepository.save(this.productRepository.create(product))
    }

    async list(search: { keyword?: string, sort?: 'DESC' | 'ASC', page: number }) {

        const limit = 3

        const query = this.productRepository.createQueryBuilder('product')
            .skip((search.page - 1) * limit)
            .take(limit)

        if (search.keyword) {
            query.where('product.name like :name', { name: `%${search.keyword}%` })
        }

        if (search.sort) {
            query.orderBy('product.price', search.sort)
        }
        const totalRecord = await query.getCount()

        return { total: Math.ceil(totalRecord / limit), data: await query.getMany() }
    }
}
