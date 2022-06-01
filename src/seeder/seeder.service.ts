import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Auction } from '../auction/entity/auction.entity'
import { Product } from '../product/entities/product.entity'
import { Repository } from 'typeorm'

@Injectable()
export class SeederService {
    @InjectRepository(Auction) readonly auctionRepository: Repository<Auction>
    @InjectRepository(Product) readonly productRepository: Repository<Product>

    async createProducts() {

        await this.productRepository.delete({})
        Logger.log('All Records Deleted!')

        const product1 = await this.productRepository.save(this.productRepository.create({
            name: 'Gramaphone',
            imageUrl: 'https://images.unsplash.com/photo-1518893883800-45cd0954574b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80',
            description: 'Good old gramaphone',
            price: 500,
            startDate: '2022-05-01 09:30',
            endDate: '2022-05-01 09:30',
        }))
        const product2 = await this.productRepository.save(this.productRepository.create({
            name: 'Wooden Bike',
            imageUrl: 'https://images.unsplash.com/photo-1458228269118-09f55da39bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Made with wooden',
            price: 200,
            startDate: '2022-05-25 09:30',
            endDate: '2022-06-25 09:30',
        }))
        const product3 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch',
            imageUrl: 'https://images.unsplash.com/photo-1516456277948-c81597a8d1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'Old watch made year 1880',
            price: 1500,
            startDate: '2022-03-10 09:30',
            endDate: '2022-04-10 09:30',
        }))
        const product4 = await this.productRepository.save(this.productRepository.create({
            name: 'Compass',
            imageUrl: 'https://images.unsplash.com/photo-1518065896235-a4c93e088e7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Compass used by us army in past',
            price: 100,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product5 = await this.productRepository.save(this.productRepository.create({
            name: 'Old Bike',
            imageUrl: 'https://images.unsplash.com/photo-1560799486-f4b726357fcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2xkJTIwYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            description: 'Old bike km is 5000',
            price: 2500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product6 = await this.productRepository.save(this.productRepository.create({
            name: 'Volkswagen',
            imageUrl: 'https://images.unsplash.com/photo-1565520651265-1148c3b277f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            description: 'An old wolkswagen 1990',
            price: 2600,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product7 = await this.productRepository.save(this.productRepository.create({
            name: 'Volkswagen',
            imageUrl: 'https://images.unsplash.com/photo-1565520651265-1148c3b277f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            description: 'An old wolkswagen 1990',
            price: 2600,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product8 = await this.productRepository.save(this.productRepository.create({
            name: 'Ford Mustang',
            imageUrl: 'https://images.unsplash.com/photo-1579211897986-63e1fcd564e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: 'Ford Mustang Car',
            price: 5600,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product9 = await this.productRepository.save(this.productRepository.create({
            name: 'Store',
            imageUrl: 'https://images.unsplash.com/photo-1577926866949-c1ed2147d862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            description: 'This store used by queen',
            price: 3600,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product10 = await this.productRepository.save(this.productRepository.create({
            name: 'Sewing Machine',
            imageUrl: 'https://images.unsplash.com/photo-1466027397211-20d0f2449a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1118&q=80',
            description: 'A good sewing machine',
            price: 1600,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product11 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product12 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product13 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product14 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product15 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch-2',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product16 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch-3',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product17 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch-4',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product18 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch-5',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product19 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch-6',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))
        const product20 = await this.productRepository.save(this.productRepository.create({
            name: 'Watch-7',
            imageUrl: 'https://images.unsplash.com/photo-1528387810833-7b46bb8e8778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            description: 'Old watch made in 1880',
            price: 500,
            startDate: '2022-05-10 09:30',
            endDate: '2022-07-10 09:30',
        }))


        const auctionProduct = await this.auctionRepository.save(
            this.auctionRepository.create([
                {
                    bid: 600,
                    name: 'Akifcan Kara',
                    avatarSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
                    product: product1
                },
                {
                    bid: 700,
                    name: 'Steward Davidman',
                    avatarSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
                    product: product1
                },
                {
                    bid: 800,
                    name: 'Dewitt Laydel',
                    avatarSrc: 'https://randomuser.me/api/portraits/men/46.jpg',
                    product: product1
                },
                {
                    bid: 300,
                    name: 'Carmencita Hacard',
                    avatarSrc: 'https://randomuser.me/api/portraits/men/97.jpg',
                    product: product2
                },
                {
                    bid: 400,
                    name: 'Leonanie Bleeze',
                    avatarSrc: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
                    product: product2
                },
                {
                    bid: 1655,
                    name: 'Staci Foskett',
                    avatarSrc: 'https://randomuser.me/api/portraits/women/63.jpg',
                    product: product3
                },
                {
                    bid: 1700,
                    name: 'Glynda Dohms',
                    avatarSrc: 'https://randomuser.me/api/portraits/women/63.jpg',
                    product: product3
                },
                {
                    bid: 250,
                    name: 'Kaleena Burnisdes',
                    avatarSrc: 'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e',
                    product: product4
                },
                {
                    bid: 350,
                    name: 'Lissi Velez',
                    avatarSrc: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490',
                    product: product4
                },
                {
                    bid: 2600,
                    name: 'Shane Kestle',
                    avatarSrc: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
                    product: product5
                },
                {
                    bid: 2800,
                    name: 'Aharon Trundler',
                    avatarSrc: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
                    product: product5
                },
                {
                    bid: 3000,
                    name: 'Karel Kibbel',
                    avatarSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50',
                    product: product5
                },
                {
                    bid: 3500,
                    name: 'Asa Threader',
                    avatarSrc: 'https://randomuser.me/api/portraits/men/36.jpg',
                    product: product5
                },
                {
                    bid: 5000,
                    name: 'Rudiger Trusty',
                    avatarSrc: 'https://randomuser.me/api/portraits/women/79.jpg',
                    product: product6
                },
                {
                    bid: 3000,
                    name: 'Melony Tyendman',
                    avatarSrc: 'https://randomuser.me/api/portraits/women/95.jpg',
                    product: product7
                },
                {
                    bid: 3500,
                    name: 'Maura Hopper',
                    avatarSrc: 'https://randomuser.me/api/portraits/women/47.jpg',
                    product: product7
                },
                {
                    bid: 7000,
                    name: 'Adella Klosser',
                    avatarSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
                    product: product7
                },
            ])
        )

        return {
            product1,
            product2,
            product3,
            product4,
            product5,
            product6,
            product7,
            product8,
            product9,
            product10,
            product11,
            product12,
            product13,
            product14,
            product15,
            product16,
            product17,
            product18,
            product19,
            product20,
            auctionProduct
        }
    }

}
