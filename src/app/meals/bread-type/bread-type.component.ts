import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bread-type',
  templateUrl: './bread-type.component.html',
  styleUrls: ['./bread-type.component.css']
})
export class BreadTypeComponent implements OnInit {

  breadTypeOptions = ['White', 'Garlic','Wheat'];
  bread: string;
  breadChosen: Array<string>;

  constructor() { }

  @Input() mealSize: string;
  @Output() breadSelected = new EventEmitter();

  ngOnInit() {
  }

  sendBreadType()
  {
    this.breadSelected.emit(this.bread);
  }

}
