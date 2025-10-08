import { tesloApi } from "../../config/api/tesloApi"
import { TesloProduct } from "../../infrastruture/interfaces/teslo-products.response"
import { ProductMapper } from "../../infrastruture/mappers/product.mapper";

export const getProductById= async( id:string) => {
    try {
        const {data} = await tesloApi.get<TesloProduct>(`products/${id}`);
        return ProductMapper.tesloProductToEntity(data)

    } catch (error) {
        console.log(error);
        throw new Error( `Error getting product by id: ${id}`)  
    }
}