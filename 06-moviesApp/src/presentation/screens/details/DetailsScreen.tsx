import { useRoute } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useMovie } from '../../hooks/useMovie'
import { MovieHeader } from '../../components/movie/MovieHeader'
import { MovieDetails } from '../../components/movie/MovieDetails'
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader'


interface Props extends NativeStackScreenProps<RootStackParams, 'Details'>{};


export const DetailsScreen = ({ route }: Props) => {
  const {movieId} = route.params
  // const { movieId } = useRoute().params
  const {isLoading, fullMovie, cast= []} = useMovie(movieId);
  
  if(isLoading) {
    return <FullScreenLoader />
  }

  return (
      <ScrollView>
        {/* Header */}
        <MovieHeader 
          title={fullMovie!.title}
          originalTitle={fullMovie!.title}
          poster={fullMovie!.poster}
        />
        {/* Detalles */}
        <MovieDetails movie={fullMovie!} cast={ cast }/>

        
          
      </ScrollView>
  )
}
