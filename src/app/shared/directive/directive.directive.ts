import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[layover]'
})
export class LayoverDirective {


  constructor(private element: ElementRef) { 
  }
 
  @HostListener('mouseover') layover() {
    console.log(this.element.nativeElement.innerHTML);
  }

}
