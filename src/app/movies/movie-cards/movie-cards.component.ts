import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {

  constructor(private api:MoviesService) { }
  @Input() movieType="";
  public data:any;
   
  ngOnInit(): void {
   this.api.get(this.movieType).subscribe((res:any)=>{
          this.data=res.results;
           
           
   },(err:any)=>{
    console.log(err)
   }) 
  }

}
