import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/http/films/films.service';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'film-container',
  templateUrl: './film-container.component.html',
  styleUrls: ['./film-container.component.scss']
})
export class FilmContainerComponent implements OnInit {

  films: Film[] = [];

  constructor(filmService: FilmService) {
    filmService.getFilms().subscribe((films) => this.films = films);
  }

  ngOnInit(): void {

  }

}
