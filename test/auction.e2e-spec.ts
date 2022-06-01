import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { ProductService } from '../src/product/product.service'
import { Product } from '../src/product/entities/product.entity'

describe('AuctionController (e2e)', () => {
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

    it('should return 200 when bid log list', () => {
        return request(app.getHttpServer())
            .get(`/auction/${activeProduct.id}`)
            .expect(200)
    })

    it('should return 200 when offer to active auction', () => {
        return request(app.getHttpServer())
            .post(`/auction`).send({
                "product": { "id": activeProduct.id },
                "bid": 15602,
                "name": "jon Kara",
                "avatarSrc": "https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            })
            .expect(201)
    })
    it('should return 403 when offer to end auction', () => {
        return request(app.getHttpServer())
            .post(`/auction`).send({
                "product": { "id": endProduct.id },
                "bid": 15602,
                "name": "jon Kara",
                "avatarSrc": "https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            })
            .expect(403)
    })
    it('should return 403 when offer to not start auction', () => {
        return request(app.getHttpServer())
            .post(`/auction`).send({
                "product": { "id": notStartProduct.id },
                "bid": 15602,
                "name": "jon Kara",
                "avatarSrc": "https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            })
            .expect(403)
    })
})
