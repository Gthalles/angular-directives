import { Directive, HostListener, HostBinding, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[finalHighlight]'
})

export class FinalHighlightDirective {

  @Input() finalHighlightColor: string | undefined;
  @Input() defaultColor: string | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.finalHighlightColor;
    this.color = this.defaultColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
    this.color = this.finalHighlightColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  @HostBinding('style.color') color: string | undefined;

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }

}