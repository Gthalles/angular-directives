import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[blueSection]'
})
export class BlueSectionDirective {

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { 
    this._renderer.setStyle(
      this._elementRef.nativeElement, 'background-color', '#fff')
  }
}
