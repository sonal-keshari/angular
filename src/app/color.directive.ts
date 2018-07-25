import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit{

  constructor(private elemRef: ElementRef) { }


  ngAfterViewInit(){


  }

}
