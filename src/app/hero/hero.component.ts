import { Component, OnInit, Input } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  name:string;
  person:object = {'name':'sonal'};
  constructor() { }

  ngOnInit() {
  }

}
