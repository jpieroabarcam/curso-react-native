import { tesloApi } from "../../config/api/tesloApi"
import type { Product } from "../../domain/entities/product"
import type { TesloProduct } from "../../infrastruture/interfaces/teslo-products.response"
import { ProductMapper } from "../../infrastruture/mappers/product.mapper"

export const getProductsByPage = async(page: number, limit: number =20): Promise<Product[]> => {
    // console.log(page,limit)

    try {
        const {data} = await tesloApi.get<TesloProduct[]>(`/products?limit=${limit}&offset=${page * 10}`)

        const products = data.map(ProductMapper.tesloProductToEntity)        
        return products;

    } catch (error) {
        console.log(error) 
        throw new Error('Error getting products')        
    }
}