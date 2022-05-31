import { Product } from "./entities/product.entity"

class ProductTransformer {

    productToPublicEntity(product: Product) {
        const { startDate, endDate, ...rest } = product

        let status: 'not-start' | 'active' | 'end'

        const now = new Date()

        if (now > startDate && now < endDate) {
            status = 'active'
        } else if (now < startDate) {
            status = 'not-start'
        } else if (now > endDate) {
            status = 'end'
        }

        return { ...rest, startDate, endDate, status }
    }

    productsToPublicEntity(products: Product[]) {
        return products.map(product => this.productToPublicEntity(product))
    }

}

export default ProductTransformer