import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty, IsDateString } from 'class-validator'


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
}