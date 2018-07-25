import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {JokeListComponent} from './joke-list/joke-list.component';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
	name1: string = '';
	name2: string = '';
  hasLastName: boolean = false;
  jokelistNew: Array<string> = [];
  style : string;
  text: string = 'This is angular';
  //for ngFor
  colors: any = [{'color': 'red'}, {'color': 'black'},{'color': 'white'},{'color': 'blue'}];
  options: any = ['even', 'odd', 'prime'];
  // for ngIfThenElse
  condition: boolean = false;
  userlist= [];
  //elseBlock : boolean = false;
  colorSelected: Array<string>;

  @ViewChild (JokeListComponent) private jlc:JokeListComponent;

  constructor() {
      setTimeout(()=> {
      this.condition = true;
      }, 4000)

        }

  ngOnInit() {
    // this.jokelistNew = ['name','lastname'];
    this.name1 = this.jlc.name;
    this.colorSelected = this.jlc.colorSelected;
  }

  // getName(){
  // 	this.name = "alex";
  // }

  getValue(){
    console.log(this.name1);
    console.log(this.name2);
    this.userlist.push({'firstName':this.name1}, {'lastName':this.name2});
    console.log(this.userlist);
  }

  updateColor()
  {
    if (this.condition) {
      console.log('red');
      return this.style= "red";

    }
    else {
      console.log('green');
      return this.style = "'green";
    }
  }

}
