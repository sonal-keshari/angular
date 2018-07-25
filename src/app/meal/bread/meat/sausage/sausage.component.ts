import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sausage',
  templateUrl: './sausage.component.html',
  styleUrls: ['./sausage.component.css']
})
export class SausageComponent implements OnInit {


  getSauce: string;
  selectedSauces: Array<any>=[];
  SauceOptions: Array<any>= [  {'name':'Honey Mustard'},
    {'name':'Mayonnaise'},
    {'name':'BBQ'},
    {'name':'Italian'},
    {'name':'Sweet Onion'},
    {'name':'1000 Island'},
    {'name':'Ranch'}
  ];

  @Input() breadSize:string;
  @Input() breadChosen:string;
  @Input() meatChosen: string;
  @Input() fillingChosen: Array<any>;

  @Output() sauceChosen1 = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  // getSaucesType()
  // {
  //   this.selectedSauces.push({'name':this.getSauce});
  //
  //   this.sendSelectedSauces();
  //
  //   return this.selectedSauces;
  // }
  //
  // // send to parent
  // sendSelectedSauces()
  // {
  //   console.log(this.selectedSauces);
  //   this.sauceChosen.emit(this.selectedSauces);
  // }

  changeEvent(){
    this.sauceChosen1.emit(this.selectedSauces.push({'name':this.getSauce}));
  }

}
