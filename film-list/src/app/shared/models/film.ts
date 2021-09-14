export class Film {
    id: string;
    poster: string;
    title: string;
    overview: string;
    releaseDate: Date;
    voteAverage: number;

    constructor(film: IFilm){
        this.id = film.id;
        this.poster = film.poster_path;
        this.title = film.title;
        this.overview = film.overview;
        this.releaseDate = film.release_date;
        this.voteAverage = film.vote_average;
    }
}

// This is used for modelling data returning to API
export interface IFilmResult {
    results:  IFilm[];
}

// This is used for modelling data returning to API
export interface IFilm {
    id: string;
    poster_path: string;
    title: string;
    overview: string;
    release_date: Date;
    vote_average: number;
}