import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styleUrls: ['./nonveg.component.css']
})
export class NonvegComponent implements OnInit {

  nonvegToppings = ['Ham','Beef','Pepperoni','Ham and Turkey','Salami'];
  nonveg: string;
  nonVegSelected: Array<string>= [];
  constructor() { }

  ngOnInit() {
  }

  sendNonVegTopping()
  {
    console.log(this.nonveg);
    this.nonVegSelected.push(this.nonveg);
  }

}
