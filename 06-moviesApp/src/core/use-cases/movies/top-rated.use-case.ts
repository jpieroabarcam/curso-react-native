import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBPopularResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesTopRatedUseCase = async( fetcher: HttpAdapter ):Promise<Movie[]> => {

    try {
        const top_rated = await fetcher.get<MovieDBPopularResponse>('/top_rated');

        return top_rated.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));

    } catch (error) {
        throw new Error(`Error fetching movies - TopRated`)
    }
    
}