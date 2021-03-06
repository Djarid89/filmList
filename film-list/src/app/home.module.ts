import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from "swiper/angular";

import { HomeComponent } from './home/home.component';
import { FilmContainerComponent } from './components/film-container/film-container.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgRatingBarModule } from 'ng-rating-bar';

// UI: Angular Material
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FilmComponent } from './components/film/film.component';

@NgModule({
  declarations: [
    HomeComponent,
    FilmContainerComponent,
    FilmDetailsComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    NgRatingBarModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
