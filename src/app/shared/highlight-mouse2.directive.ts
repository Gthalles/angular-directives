import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse2]'
})

export class HighlightMouse2Directive {
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = '#fff';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'var(--blue)';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
    this._renderer.setStyle(this._elementRef.nativeElement, '', '')
   }

}
