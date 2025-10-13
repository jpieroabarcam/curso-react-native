import { FlatList, Image, Text, View } from 'react-native'
import { FadeInImage } from '../ui/FadeInImage';

interface Props {
    images: string[];
}

export const ProductImages = ({images}: Props) => {
  return (
    <>
        {
            (images.length === 0) 
            ? <Image source={ require('../../../assets/no-product-image.png')} 
            style={{width:150, height: 150}}
            />
            : (
            <FlatList
                data={images}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                <FadeInImage
                    uri={item}
                    style={{ width: 200, height: 200, marginHorizontal: 7 }}
                />
                )}
            />
            )
        }
    </>
  )
}
