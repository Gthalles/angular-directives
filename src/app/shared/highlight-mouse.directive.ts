import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', '#343a40');
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', 'var(--blue)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'var(--blue)');
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', '#343a40');
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {

  }

}
