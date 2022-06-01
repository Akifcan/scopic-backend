import { Controller, Inject, Post } from '@nestjs/common'
import { SeederService } from './seeder.service'

@Controller('seeder')
export class SeederController {

    @Inject() readonly seederService: SeederService

    @Post()
    generate() {
        return this.seederService.createProducts()
    }

}
