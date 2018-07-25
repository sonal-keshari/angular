import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit {

  meat_empty: boolean= false;
  filling_empty: boolean= false;
  sauce_empty: boolean= false;
  selectedMeat: string;
  meatOptions: Array<any>= [  {'name':'Ham'},
                              {'name':'Turkey'},
                              {'name':'Beef'},
                              {'name':'Pepperoni'},
                              {'name':'HAn and Turkey'},
                              {'name':'Veggie Delight'},
                              {'name':'Salami'}
                          ];

  sauceChosen12: string;
  fillingChosen: string;

  @Input() breadSize:string;
  @Input() breadChosen:string;

  @Output() meatChosen = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  getSelectedMeat(){

    console.log(this.selectedMeat);
    this.meat_empty = true;

    this.sendSelectedMeat();

    return this.selectedMeat;
  }

  //sending to parent componenet
  sendSelectedMeat()
  {
      this.meatChosen.emit(this.selectedMeat);
  }

  // rcving form child components

  getSelectedSauces(res)
  {
    this.sauceChosen12 = res;
    console.log(this.sauceChosen12,"hello sonal");
    this.sauce_empty = true;
  }


  getSelectedFillings($event)
  {
    this.fillingChosen = $event;
    this.filling_empty = true;
  }

}
