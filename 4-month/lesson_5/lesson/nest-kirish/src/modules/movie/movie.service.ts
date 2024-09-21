import { Injectable } from "@nestjs/common";

export declare interface Movie {
    id: number,
    name: string,
    year: number,
    rating: number
}

@Injectable()
export class MovieService {
    private movies: Movie[] = []

    getAllMovies(): Movie[] {
        return this.movies
    }
}