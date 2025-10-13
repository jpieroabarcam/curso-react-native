import { Size } from "@ui-kitten/components/devsupport";
import { tesloApi } from "../../config/api/tesloApi"
import { Gender, TesloProduct } from "../../infrastruture/interfaces/teslo-products.response"
import { ProductMapper } from "../../infrastruture/mappers/product.mapper";
import { Product } from "../../domain/entities/product";

const emptyProduct: Product = {
    id:'',
    title: 'Nuevo producto',
    description: '',
    price: 0,
    images: [],
    slug: '',
    gender: Gender.Unisex,
    sizes: [],
    stock: 0,
    tags:[],
}

export const getProductById= async( id:string) => {

    if( id === 'new') return emptyProduct;

    try {
        const {data} = await tesloApi.get<TesloProduct>(`products/${id}`);
        return ProductMapper.tesloProductToEntity(data)

    } catch (error) {
        console.log(error);
        throw new Error( `Error getting product by id: ${id}`)  
    }
}