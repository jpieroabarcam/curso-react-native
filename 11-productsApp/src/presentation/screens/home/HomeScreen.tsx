import {  Layout, Text } from '@ui-kitten/components'
import { useAuthStore } from '../../store/auth/useAuthStore'
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { useQuery } from '@tanstack/react-query';

export const HomeScreen = () => {

    const {logout, status} = useAuthStore();

    const {isLoading, data: products =[]} = useQuery({
        queryKey: ['products','infinite'],
        staleTime: 1000*60*60, // 1 hour
        queryFn: ()=> getProductsByPage(0)

    })

    console.log(status);

    return (
        <Layout style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>{JSON.stringify(products, null, 2)}</Text>
            
            {/* <Icon name="facebook" /> */}

                
        </Layout>
    )
}
