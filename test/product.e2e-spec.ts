import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { ProductService } from '../src/product/product.service'
import { Product } from '../src/product/entities/product.entity'

describe('ProdutController (e2e)', () => {
    let app: INestApplication
    let productService: ProductService
    let server: INestApplication


    let activeProduct: Product
    let notStartProduct: Product
    let endProduct: Product

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile()

        app = moduleFixture.createNestApplication()
        productService = moduleFixture.get<ProductService>(ProductService)
        activeProduct = await productService.productRepository.save({
            name: 'Wooden Bike',
            imageUrl: 'https://images.unsplash.com/photo-1458228269118-09f55da39bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Made with wooden',
            price: 200,
            startDate: '2022-05-25 09:30',
            endDate: '2022-06-25 09:30',
        })
        notStartProduct = await productService.productRepository.save({
            name: 'not start',
            imageUrl: 'https://images.unsplash.com/photo-1458228269118-09f55da39bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Made with wooden',
            price: 200,
            startDate: '2022-09-25 09:30',
            endDate: '2022-10-25 09:30',
        })
        endProduct = await productService.productRepository.save({
            name: 'end product',
            imageUrl: 'https://images.unsplash.com/photo-1458228269118-09f55da39bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Made with wooden',
            price: 200,
            startDate: '2022-01-25 09:30',
            endDate: '2022-02-25 09:30',
        })
        await app.init()
        server = app.getHttpServer()

    })

    afterAll(async () => {
        await productService.productRepository.delete({ id: endProduct.id })
        await productService.productRepository.delete({ id: notStartProduct.id })
        await productService.productRepository.delete({ id: activeProduct.id })
        await productService.productRepository.delete({ name: 'demo-product' })
        await app.close()
        server.close()
    })

    it('should return 200 when products list', () => {
        return request(app.getHttpServer())
            .get('/product?sort=ASC&page=1')
            .expect(200)
    })
    it('should return 200 when single product list', () => {
        return request(app.getHttpServer())
            .get(`/product/${activeProduct.id}`)
            .expect(200)
    })
    it('should return 201 when admin creates product', () => {
        return request(app.getHttpServer())
            .post('/product')
            .send({
                name: 'demo-product',
                imageUrl: 'https://images.unsplash.com/photo-1458228269118-09f55da39bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'Made with wooden',
                price: 200,
                startDate: '2022-05-25 09:30',
                endDate: '2022-06-25 09:30',
            })
            .set({ "role": "admin" })
            .expect(201)
    })
    it('should return 401 when unauthorized user attempts create product', () => {
        return request(app.getHttpServer())
            .post('/product')
            .send({
                name: 'demo-product',
                imageUrl: 'https://images.unsplash.com/photo-1458228269118-09f55da39bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'Made with wooden',
                price: 200,
                startDate: '2022-05-25 09:30',
                endDate: '2022-06-25 09:30',
            })
            .set({ "role": "user" })
            .expect(401)
    })
})
