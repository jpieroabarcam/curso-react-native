import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { FlatList, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Button, Text } from 'react-native-paper'
import { getPokemons } from '../../../actions/pokemons'
import { PokeballBg } from '../../components/ui/PokeballBg'
import { globalTheme } from '../../../config/theme/globalTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PokemonCard } from '../../components/pokemons/PokemonCard'

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  // Esta es la forma tradicional de una peticion http
  // const { isLoading, data: pokemons = []} =useQuery({
  //   queryKey: ['pokemons'],
  //   queryFn: () => getPokemons(0),
  //   staleTime: 1000*60*60, //60 minutes
  // });
  const { isLoading, data, fetchNextPage} =useInfiniteQuery({
    queryKey: ['pokemons','infinite'],
    initialPageParam: 0,
    queryFn: (params) => getPokemons(params.pageParam),
    getNextPageParam: (lastPage, pages) => pages.length,
    staleTime: 1000*60*60, //60 minutes
  });


  return (
    <View style={globalTheme.globalMargin}>
      <PokeballBg style={ styles.imgPosition}/>       
      <FlatList 
        data={data?.pages.flat() ?? []}
        keyExtractor= {(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        ListHeaderComponent={ () => ( <Text variant='displayMedium'>Pokédex</Text>) }
        style={{paddingTop: top + 20}}
        renderItem={
          ({item}) => ( <PokemonCard pokemon={item} />)
        }
        onEndReachedThreshold={ 0.6 }
        onEndReached={ () => fetchNextPage()}
        showsVerticalScrollIndicator={false}
      /> 
    </View>
  )
}

const styles = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -85,
    right: -85,
  }
})
