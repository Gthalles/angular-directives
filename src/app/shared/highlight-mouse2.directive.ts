import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse2]'
})

export class HighlightMouse2Directive {
  
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = "#343a40";
    this.color = "var(--blue)";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'var(--blue)';
    this.color = "#343a40";
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  @HostBinding('style.color') color: string |  undefined;

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }

}
