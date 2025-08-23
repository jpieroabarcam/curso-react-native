import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesUpcomingUseCase = async( fetcher: HttpAdapter ):Promise<Movie[]> => {

    try {
        const upcoming = await fetcher.get<NowPlayingResponse>('/upcoming');

        return upcoming.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));

    } catch (error) {
        throw new Error(`Error fetching movies - Upcoming`)
    }
    
}