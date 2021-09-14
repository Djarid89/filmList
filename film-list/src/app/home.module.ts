import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from "swiper/angular";

import { HomeComponent } from './home/home.component';
import { FilmContainerComponent } from './components/film-container/film-container.component';

@NgModule({
  declarations: [
    HomeComponent,
    FilmContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
