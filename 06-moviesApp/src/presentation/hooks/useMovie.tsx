import { useEffect, useState } from "react";
import  * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import { FullMovie } from "../../core/entities/movie.entity";
import { Cast } from "../../core/entities/cast.entity";

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true)
    const [fullMovie, setFullMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();

    useEffect(() => {      
        loadMovie();
    }, [movieId])

    const loadMovie = async () => {

        setIsLoading(true)

        const getMoviePromise =  UseCases.getMovieByIdUseCase(movieDBFetcher,movieId);
        const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);
        

        const [getMovie,castMovie] 
        = await Promise.all([
            getMoviePromise,
            castPromise
        ])

        setFullMovie( getMovie);
        setCast(castMovie);        

        setIsLoading(false)
    }

    return {
        isLoading,
        fullMovie,
        cast,
    }
}