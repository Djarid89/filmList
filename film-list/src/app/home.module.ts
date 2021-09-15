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

// UI: Angular Material
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    FilmContainerComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
