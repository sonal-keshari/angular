import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from './movie';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url: string = environment.apiUrl;
  url1:string;
  detail:any;
  constructor(private http: HttpClient) { }

  getMovieObsr(): Observable<Movie[]>{
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleErrorsWithObservable);
  }

  private extractData(res: Response | any){
    let  body = res.results;
    return body;
  }

  private handleErrorsWithObservable(error: Response | any) {

    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  public getMovieDetailById(id)
  {
    this.url1 ='https://api.themoviedb.org/3/movie/' + id + '?api_key=35e16679c616a21b9ddebb66272c5902';
    console.log("url => ", this.url1);
    this.detail = this.http.get(this.url1)
      .map(this.extractMovieData);
    // console.log(this.detail);

  }

  private extractMovieData(res: Response | any){
    console.log("res", res);
    let  body = res;
    return body;
  }

  }
