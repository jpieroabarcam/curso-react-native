import { useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movies/movie/MovieHeader'


interface Props extends NativeStackScreenProps<RootStackParams, 'Details'>{};


export const DetailsScreen = ({ route }: Props) => {
  const {movieId} = route.params
  // const { movieId } = useRoute().params
  const {isLoading, fullMovie} = useMovie(movieId);
  
  if(isLoading) {
    return <Text> ... Is loading</Text>
  }

  return (
      <View>
        {/* Header */}
        <MovieHeader 
          title={fullMovie!.title}
          originalTitle={fullMovie!.title}
          poster={fullMovie!.poster}
        />
        {/* Detalles */}
          
      </View>
  )
}
