import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export class Film {
    id: string;
    poster: SafeResourceUrl;
    posterSafe: SafeResourceUrl;
    title: string;
    overview: string;
    releaseDate: Date;
    voteAverage: number;

    constructor() {
        this.id = '';
        this.poster = '';
        this.posterSafe = '',
        this.title = '';
        this.overview = '';
        this.releaseDate = new Date();
        this.voteAverage = 0;
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