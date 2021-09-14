import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export class Film {
    id: string;
    poster: SafeResourceUrl;
    title: string;
    overview: string;
    releaseDate: Date;
    voteAverage: number;

    constructor(film: IFilm, sanitizer: DomSanitizer) {
        this.id = film.id;
        this.poster = sanitizer.bypassSecurityTrustResourceUrl('https://image.tmdb.org/t/p/w500' + film.poster_path); 
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