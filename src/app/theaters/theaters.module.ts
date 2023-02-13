import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatersComponent } from './theaters.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:TheatersComponent}
]
@NgModule({
  declarations: [
    TheatersComponent
  ],
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ]
})
export class TheatersModule { }
