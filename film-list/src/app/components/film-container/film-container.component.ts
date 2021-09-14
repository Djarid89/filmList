import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FilmService } from 'src/app/http/films/films.service';
import { Film } from 'src/app/shared/models/film';

import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'film-container',
  templateUrl: './film-container.component.html',
  styleUrls: ['./film-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilmContainerComponent implements OnInit {

  films: Film[] = [];

  constructor(filmService: FilmService) {
    filmService.getFilms().subscribe((films) => this.films = films);
  }

  ngOnInit(): void {

  }

  trackByFilm(index:number, film:Film): number {
    return Number(film.id);
  }

}
