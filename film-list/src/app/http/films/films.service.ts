import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film as Film, IFilm, IFilmResult } from 'src/app/shared/models/film';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<IFilmResult>(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`).pipe(
      map(films => films.results.map(film => {
        let result = new Film();
        result.id = film.id;
        result.poster = film.poster_path;
        result.posterSafe = this.sanitizer.bypassSecurityTrustResourceUrl('https://image.tmdb.org/t/p/w500' + film.poster_path);
        result.title = film.title;
        result.overview = film.overview;
        result.releaseDate = film.release_date;
        result.voteAverage = film.vote_average;
        return result;
      }))
    );
  }
}