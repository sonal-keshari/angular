import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective implements AfterViewInit{

  constructor(private elemRef: ElementRef) { }


  ngAfterViewInit(){
    this.elemRef.nativeElement.style.fontFamily = 'cursive';
    this.elemRef.nativeElement.style.color = 'red';
  }

}
