import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  @Input()
  film: Film | undefined

  constructor() { }

  ngOnInit(): void {
    if(!this.film)
      this.film = window.history.state.film;
  }

}
