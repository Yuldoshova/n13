import { Controller, Get } from "@nestjs/common";
import { Movie, MovieService } from "./movie.service";

@Controller()
export class MovieController {
    constructor(
        private readonly movieService: MovieService
    ) { }

    @Get('/movies')
    getMovies(): Movie[] {
        return this.movieService.getAllMovies()
    }

}