import { Component, OnInit, Input } from '@angular/core';
import { ListComponent } from './list/list.component';
import {MovieService} from '../movie.service';
import {Observable} from 'rxjs';
import {Movie} from '../movie';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  name:string ="sonal";
  surname:string = '';
  observableMovie: Observable<Movie[]>;
  movies: Movie[];
  errormsg:string;
  movieDetail:any;

  constructor(private movieSer: MovieService) { }

  ngOnInit(): void {

    this.observableMovie = this.movieSer.getMovieObsr();

    this.observableMovie.subscribe(
     movies => this.movies = movies,
      error => this.errormsg = <any> error
    );
  }

  getMovieDetail(id)
  {
      console.log("id is => "+ id);
     this.movieDetail = this.movieSer.getMovieDetailById(id);
     // console.log(this.movieDetail);
  }

}
