import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:"movies",loadChildren:()=>import('./movies/movies.module').then(m=>m.MoviesModule)},
  {path:"theaters",loadChildren:()=>import('./theaters/theaters.module').then(m=>m.TheatersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
