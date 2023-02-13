import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    
  constructor(private http:HttpClient) { }
  
  baseUrl="https://api.themoviedb.org/3/movie/";
  get(movieType:string){
   return  this.http.get(this.baseUrl+`${movieType}?api_key=af6dba2da08ec0175ccac501b7db06c8`);
  }
}
