import { Body, Controller, Delete, Get, Inject, Param, Post, Query } from '@nestjs/common'
import { Product } from './entities/product.entity'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {

    @Inject() readonly productService: ProductService

    @Post()
    createProduct(@Body() product: Product) {
        return this.productService.create(product)
    }

    @Get()
    listProduct(@Query() query: { keyword: string, sort: 'DESC' | 'ASC', page: number }) {
        return this.productService.list({ keyword: query.keyword, sort: query.sort, page: query.page })
    }

    @Get('/:id')
    singleProduct(@Param() params: { id: number }) {
        return this.productService.find(params.id)
    }

    @Delete('/:id')
    deleteProduct(@Param() params: { id: number }) {
        return this.productService.deleteProduct(params.id)
    }

}
