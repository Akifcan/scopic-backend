import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsNotEmpty, IsDateString } from 'class-validator'
import { Auction } from '../../auction/auction.entity'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsNotEmpty()
    name: string

    @Column()
    @IsNotEmpty()
    description: string

    @Column()
    @IsNotEmpty()
    price: number

    @Column()
    @IsNotEmpty()
    imageUrl: string

    @Column()
    @IsNotEmpty()
    @IsDateString()
    startDate: Date

    @Column()
    @IsNotEmpty()
    @IsDateString()
    endDate: Date

    @OneToMany(
        () => Auction,
        auction => auction.product,
        { cascade: true }
    )
    auction: Auction
}