import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmContainerComponent } from './components/film-container/film-container.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/film-container', pathMatch: 'full' },
  { path: 'film-container', component: FilmContainerComponent },
  { path: 'film-details', component: FilmDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
