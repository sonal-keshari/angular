import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {BreadComponent} from './bread/bread.component';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meal_size: string = '';
  meal_empty: boolean = false;
  bread_empty: boolean = false;

  breadSize: string;

  breadSelected: string;
  // @Output() meatChosen = new EventEmitter<string>();
  // @Output() fillingChosen = new EventEmitter<Array>();
  // @Output() selectedSauces = new EventEmitter<Array>();

  @Input() color: string = 'black';

  @ViewChild(BreadComponent) private bread: BreadComponent;

  constructor() {

  }


  ngOnInit() {

  }

  getBread()
  {
    this.breadSize = this.bread.breadSize;
  }

  getBreadSize()
  {
    console.log(this.meal_empty);
    console.log(this.meal_size);
    this.meal_empty = true;  // flag to hide child components from loading
    console.log(this.meal_empty);
    return this.meal_size;
  }

  //get chosen bread from bread child component
  getSelectedBread($event){
      this.breadSelected = $event;
      this.bread_empty = true;
  }
}
