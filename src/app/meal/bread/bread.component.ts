import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit {

  bread_empty: boolean= false;
  breadTypes: Array<any>= [{'name':'White'},{'name':'Garlic'},{'name':'Wheat'}];
  SelectedValue: string;


  meatSelected: string;
  meat_empty: boolean= false;


  @Input() breadSize:string;

  @Output() breadChosen = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getBreadType()
  {
    console.log(this.SelectedValue);
    this.bread_empty = true;

    this.sendSelectedBread();

    return this.SelectedValue;
  }

  //rcving from child component
  getSelectedMeat($event)
  {
    this.meatSelected = $event;
    this.meat_empty = true;
  }

  // sending to parent component
  sendSelectedBread()
  {
    this.breadChosen.emit(this.SelectedValue);
  }
}
