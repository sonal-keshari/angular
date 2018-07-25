import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filling',
  templateUrl: './filling.component.html',
  styleUrls: ['./filling.component.css']
})
export class FillingComponent implements OnInit {

  filling_empty:boolean = false;
  getFilling: string;
  selectedFilling: Array<any>=[];
  fillingOptions: Array<any>= [  {'name':'Cheese'},
    {'name':'Lettuce'},
    {'name':'Tomato'},
    {'name':'Onion'},
    {'name':'Cucumber'},
    {'name':'Pickle'},
    {'name':'Capsicum'}
  ];

  @Input() breadSize:string;
  @Input() breadChosen:string;
  @Input() meatChosen: string;

  @Output() fillingChosen = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getFillingType()
  {
    this.selectedFilling.push({'name':this.getFilling});
    console.log(this.selectedFilling);
    this.filling_empty = true;

    this.sendSelectedFilling();

    return this.selectedFilling;
  }

  sendSelectedFilling()
  {
    this.fillingChosen.emit(this.selectedFilling);
  }

}
