import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  name: string ='sonal';
  color:string;
  colorSelected:Array<string>=[];
  colors: Array<string> = ['red','black','white'];
  constructor() { }

  ngOnInit() {
  }

  getColor(){
    console.log(this.color);
    this.colorSelected.push(this.color);
  }

}
