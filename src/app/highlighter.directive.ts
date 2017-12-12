import { Directive, HostListener, ElementRef } from '@angular/core';
import { DateFunction } from './Date-Data';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  currentDate: string;

  constructor(private el: ElementRef) {
    this.currentDate = new DateFunction().getCurrentDate();
   }

  @HostListener('mouseenter')
  OnMouseEnter() {
    const text = this.el.nativeElement.children[3].innerText;
   console.log(text + '   ' + this.currentDate);
   if ( text < this.currentDate ) {
     this.highlight('red');
   }
   if ( text === this.currentDate ) {
     this.highlight('green');
   }
   if ( text > this.currentDate ) {
      this.highlight('yellow');
   }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  // console.log(this.el.nativeElement.parentNode);
  }
}
