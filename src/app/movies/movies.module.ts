import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';

const routes: Routes = [
  {path:"",component:MoviesComponent},
  
];

@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class MoviesModule { }
