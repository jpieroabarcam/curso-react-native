import { useRef } from 'react'

import { Button, ButtonGroup, Input, Layout, useTheme } from '@ui-kitten/components'
import { MainLayout } from '../../layouts/MainLayout'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../navigation/StackNavigator'

import { getProductById,updateCreateProduct } from '../../../actions/products';

import { ScrollView } from 'react-native'
import { Product } from '../../../domain/entities/product'
import { MyIcon } from '../../components/ui/MyIcon'
import { Formik } from 'formik'
import { ProductImages } from '../../components/products/ProductImages'
import { genders, sizes } from '../../../config/constants/constants'
import { CameraAdapter } from '../../../config/adapters/camera-adapter'


interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> { }

export const ProductScreen = ({ route }: Props) => {
  const productIdRef = useRef(route.params.productId);
  const theme = useTheme();
  const queryClient = useQueryClient();

  const { productId } = route.params;

  const { data: product, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productIdRef.current)
  })

  
  const mutations = useMutation({
    mutationFn: ( data: Product) => updateCreateProduct({...data, id: productIdRef.current}),
    onSuccess(data: Product){
      productIdRef.current = data.id; //creacion

      queryClient.invalidateQueries({queryKey: ['products', 'infinite']});
      queryClient.invalidateQueries({queryKey: ['product', data.id]});
      // queryClient.setQueryData(['product', data.id],data);
      
    }
  })
  

  if (!product) {
    return (<MainLayout title='Cargando...'></MainLayout>)
  }

  return (
    <Formik
      initialValues={ product }
      onSubmit={ (values) => mutations.mutate(values)}
    >
      {
        ({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
          <MainLayout
            title={values.title}
            subtitle={`Precio: ${values.price}`}
            rightAction={ async() => {
                const photos = await CameraAdapter.getPicturesFromLibrary();
                setFieldValue('images', [...values.images, ...photos]);
              }
            }
            rightActionIcon='image-outline'
          >
            <ScrollView style={{ flex: 1 }}>
              {/* imagenes del producto */}
              <Layout style={{ marginHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>                
                <ProductImages images={values.images} />
              </Layout>
    
              {/* Formulario */}
              <Layout style={{ marginHorizontal: 5 }}>
                <Input
                  label="Titulo"
                  style={{ marginVertical: 5 }}
                  value={values.title}
                  onChangeText={handleChange('title')}
                />
                <Input
                  label="Slug"
                  value={values.slug}
                  style={{ marginVertical: 5 }}
                  onChangeText={handleChange('slug')}
                />
                <Input
                  label="Descripción"
                  value={values.description}
                  onChangeText={handleChange('description')}
                  multiline
                  numberOfLines={5}
                  style={{ marginVertical: 5 }}
                />
              </Layout>
    
              {/*  Precio inventario */}
    
              <Layout style={{ marginVertical: 5, marginHorizontal: 15, flexDirection: 'row', gap: 10 }}>
                <Input
                  label="Precio"
                  value={values.price.toString()}
                  onChangeText={handleChange('price')}
                  style={{ flex: 1 }}
                  keyboardType='numeric'
                />
                <Input
                  label="Inventario"
                  value={values.stock.toString()}
                  onChangeText={handleChange('stock')}
                  style={{
                    flex: 1,
                    backgroundColor: true ? theme['color-primary-200'] : undefined
    
                  }}
                  keyboardType='numeric'
                />
    
              </Layout>
    
              {/* Selectores */}
              <ButtonGroup
                style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }}
                size='small'
                appearance='outline'
              >
                {
                  sizes.map((size) => (
                    <Button
                      onPress={() => setFieldValue('sizes',
                        values.sizes.includes(size) 
                         ? values.sizes.filter( s => s !== size)
                         : [...values.sizes,size]
                      )}
                      key={size}
                      style={{ 
                        flex: 1,
                        backgroundColor: values.sizes.includes(size) 
                          ? theme['color-primary-200'] : undefined
                      }}
                    >
                      {size}
                    </Button>
                  ))
                }
              </ButtonGroup>
    
              {/* generos */}
              <ButtonGroup
                style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }}
                size='small'
                appearance='outline'
              >
                {
                  genders.map((gender) => (
                    <Button
                      onPress={ () => setFieldValue('gender', gender)}
                      key={gender}
                      style={{ 
                        flex: 1,
                        backgroundColor: values.gender.startsWith(gender) 
                          ? theme['color-primary-200'] : undefined
                       }}
                    >
                      {gender}
                    </Button>
                  ))
                }
              </ButtonGroup>
    
              {/* Boton guardar */}
              <Button
                accessoryLeft={<MyIcon name="save-outline" white />}
                onPress={() => handleSubmit()}
                disabled={mutations.isPending}
                style={{ margin: 15 }}
    
              >
                Guardar
              </Button>
    
              <Layout style={{ height: 300 }} />
    
            </ScrollView>
    
          </MainLayout>

        )
      }

    </Formik>
  )
}
