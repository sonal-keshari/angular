import { Component, OnInit, ViewChild} from '@angular/core';
import {VegComponent} from './toppings/veg/veg.component';
import {ToppingsComponent} from './toppings/toppings.component';
import {NonvegComponent} from './toppings/nonveg/nonveg.component';
import {SaucesComponent} from './sauces/sauces.component';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit{

  mealSizeOptions = ['foot long', '6inch'];
  size : string;
  mealSelected: Array <string>= [];
  breadTypeSelected: Array <string>= [];
  veggies: Array <string>;
  nonveg: Array <string>;
  sauceChosen: Array<string>;

  val: string ="20px";

  @ViewChild(ToppingsComponent) private vegTopping:ToppingsComponent;
  @ViewChild(NonvegComponent) private nonVegTopping:NonvegComponent;
  @ViewChild(SaucesComponent) private sauceTopping:SaucesComponent;

  constructor() { }

  ngOnInit() {

  }


  getMealSize()
  {
    this.mealSelected.push(this.size);
  }

  rcvBreadType(res)
  {
     this.breadTypeSelected = res;
    // get the veg toppings
    this.veggies = this.vegTopping.veg;

    // get the non veg toppings
    this.nonveg = this.nonVegTopping.nonVegSelected;

    this.sauceChosen = this.sauceTopping.sauceSelected;
    // console.log("sauce inside meal =>"+this.sauceChosen);

  }

  updateColor()
  {
    console.log(this.breadTypeSelected.length);
  }


}
