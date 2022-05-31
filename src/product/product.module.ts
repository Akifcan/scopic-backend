import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './entities/product.entity'
import ProductTransformer from './product.transformer'

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, ProductTransformer],
  controllers: [ProductController]
})
export class ProductModule { }
