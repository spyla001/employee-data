import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRowhighlight]'
})
export class RowhighlightDirective {

  constructor(private renderer: Renderer2, private elementref: ElementRef) { }

  @HostListener('mouseenter') mouseenter(eventdata: Event){
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'grey')
  }
  @HostListener('mouseleave') mouseleave(eventdata: Event){
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'transparent')
  }

}
