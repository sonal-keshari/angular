import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sauces',
  templateUrl: './sauces.component.html',
  styleUrls: ['./sauces.component.css']
})
export class SaucesComponent implements OnInit {

  sauces = ['Hone Mustard','BBQ','Italian','Sweet Onion','Ranch'];
  sauceChosen: string;
  sauceSelected: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  sendSauceSelected()
  {
    this.sauceSelected.push(this.sauceChosen);
    console.log(this.sauceSelected);
  }

}
