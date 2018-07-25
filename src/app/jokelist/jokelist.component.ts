import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {
  // @Input().JokeList:Array<object>;
  
  // @Output()listJokes = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getJokelist(){
    
  }
}
