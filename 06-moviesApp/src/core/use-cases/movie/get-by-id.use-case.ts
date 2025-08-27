import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MovieDBMovie } from "../../../infraestructure/interfaces/movie-get.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity"

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
    try {

        // fetcher
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
        // mappeo
        return MovieMapper.formMoviDBToEntity(movie);
        
    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`);
    }
}