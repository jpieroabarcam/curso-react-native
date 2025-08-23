import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { MoviePoster } from './MoviePoster'
import { useEffect, useRef } from 'react';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

export const HorizontalCarrousel = ({movies, title, loadNextPage}:Props) => {

  const isLoading = useRef(false);

  useEffect(() => {
      setTimeout(() => {
        isLoading.current= false;
      }, 200);
    }, [movies])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

    if (isLoading.current) return;
    
    const { contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
    if (!isEndReached) return;

    isLoading.current = true;

    // Cargar las siguientes peliculas
    loadNextPage && loadNextPage();

  }

  return (
    <View
      style={{ height: title ? 160 : 120 }}
    >
      {
        title && (
          <Text
            style={{
              fontSize: 30,
              fontWeight: '300',
              marginLeft: 10,
              marginBottom: 10,
              color: 'black'
            }}
          >
            {title}
          </Text>
        )
      }

      <FlatList 
        data={movies}
        renderItem={ ({item}) => ( 
          <MoviePoster movie={item} width={140} height={120} />
         )}
         keyExtractor={ (item,index) => `${item.id}-${index}`}
         horizontal
         showsHorizontalScrollIndicator={false}
         onScroll={ (event) => onScroll(event)}
      />
        
    </View>
  )
}