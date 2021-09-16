import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { Location } from '@angular/common'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilmDetailsComponent implements OnInit {
  
  film: Film | undefined;

  constructor(private location: Location, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.film = window.history.state.film;
    if(this.film)
      this.film.posterSafe = this.sanitizer.bypassSecurityTrustResourceUrl('https://image.tmdb.org/t/p/w500' + this.film?.poster);
  }

  goToBack(): void {
    this.location.back()
  }
}
