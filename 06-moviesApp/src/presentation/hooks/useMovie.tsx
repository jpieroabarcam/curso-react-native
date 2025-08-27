import { useEffect, useState } from "react";
import  * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import { FullMovie } from "../../core/entities/movie.entity";

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true)
    const [fullMovie, setFullMovie] = useState<FullMovie>();

    useEffect(() => {      
        loadMovie();
    }, [movieId])

    const loadMovie = async () => {

        setIsLoading(true)

        const getMoviePromise = await UseCases.getMovieByIdUseCase(movieDBFetcher,movieId)
        console.log(getMoviePromise);

        const [getMovie] 
        = await Promise.all([
            getMoviePromise,
        ])

        setFullMovie( getMovie);       

        setIsLoading(false)
    }

    return {
        isLoading,
        fullMovie,
    }
}