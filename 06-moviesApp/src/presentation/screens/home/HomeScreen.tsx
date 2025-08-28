import { ScrollView, Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarrousel } from '../../components/movies/PosterCarrousel';
import { HorizontalCarrousel } from '../../components/movies/HorizontalCarrousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets();

    const {isLoading, nowPlaying, popular,topRated, upcoming, popularNextPage} = useMovies();

    if (isLoading) {
        return ( <FullScreenLoader />)
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom:30}}>
                {/* principal */}
                <PosterCarrousel 
                    movies={nowPlaying}
                />
                {/* populares */}
                <HorizontalCarrousel
                    movies={popular}
                    title="Populares"
                    loadNextPage={ popularNextPage }
                />

                {/* toprated */}
                <HorizontalCarrousel
                    movies={topRated}
                    title="Mejor calificados"
                />
                {/* Proximamente */}
                <HorizontalCarrousel
                    movies={upcoming}
                    title="Próximamente"
                />
                
            </View>
        </ScrollView>
  )
}
