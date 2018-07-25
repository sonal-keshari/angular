import {Component, OnInit, ViewChild} from '@angular/core';
import {VegComponent} from './veg/veg.component';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent implements OnInit {

  veg:Array<string>;
  @ViewChild(VegComponent) private vegTop:VegComponent;

  constructor() { }


  ngOnInit() {

    this.veg = this.vegTop.vegSelected;
  }

}
