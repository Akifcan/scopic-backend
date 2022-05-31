import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { Product } from '../product/entities/product.entity'


@Entity()
export class Auction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsNotEmpty()
    bid: number

    @Column()
    @IsNotEmpty()
    name: string

    @Column()
    @IsNotEmpty()
    avatarSrc: number

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(
        () => Product,
        product => product.id,
        { onDelete: 'CASCADE' }
    )
    product: Product

}