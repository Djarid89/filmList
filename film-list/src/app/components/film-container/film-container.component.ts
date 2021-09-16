import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/http/films/films.service';
import { Film } from 'src/app/shared/models/film';

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
  order: string;

  orders: Order[] = [
    {value: OrderType.Date, viewValue: 'Data di uscita'},
    {value: OrderType.Vote, viewValue: 'Media dei voti'}
  ];

  constructor(filmService: FilmService, private router: Router) {
    this.order = OrderType.Date
    filmService.getFilms().subscribe(
      (films) => this.films = films,
      () => alert('Qualcosa è andato storto...'),
      () => this.orderFilms());
  }

  ngOnInit(): void {

  }

  trackByFilm(index:number, film:Film): number {
    return Number(film.id);
  }

  orderFilms(): void {
    if(this.order === OrderType.Date)
      this.films.sort((a, b) => { return <any>new Date(b.releaseDate) - <any>new Date(a.releaseDate); });
    else
      this.films.sort((a, b) => b.voteAverage - a.voteAverage);
  }

  goToDetails(film: Film): void {
    this.router.navigate(['/film-details'], { state: { film } });
  }
}

interface Order {
  value: string;
  viewValue: string;
}

enum OrderType {
  Date = 'releaseDate',
  Vote = 'voteAverage'
}

