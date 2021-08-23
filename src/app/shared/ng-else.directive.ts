// Renderizando um template em uma diretiva estrutural
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {
  // Atributos
  @Input('appNgElse') set ngElse(condition: boolean) {
    if(!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }

  constructor(private _templateRef: TemplateRef<any>, private _viewContainerRef: ViewContainerRef) { }

}
