import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film as Film, IFilm, IFilmResult } from 'src/app/shared/models/film';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<IFilmResult>(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`).pipe(
      map(films => films.results.map(film => new Film(film)))
    );
  }
}