import {Component, OnInit} from '@angular/core';
import {MealsComponent} from '../../meals.component';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {

  vegToppings = ['Cucumber','Veggie Delight','Onion','Cheese','Tomato'];
  veg: string;
  vegSelected:Array<string>=[];


  constructor() { }

  ngOnInit() {
  }

  sendVegTopping(){
    this.vegSelected.push(this.veg);
      console.log("veg ts => "+this.vegSelected);
  }

}
