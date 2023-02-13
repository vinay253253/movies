import { Component ,OnInit} from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'movies';
  constructor(private api:MoviesService) { }
  
  public data:any;

  
  ngOnInit(): void {
   
    
  }
}
