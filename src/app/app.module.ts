import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { NgClassDirectiveComponent } from './ng-class-directive/ng-class-directive.component';
import { NgStyleComponentComponent } from './ng-style-component/ng-style-component.component';
import { ElvisComponent } from './elvis/elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { BlueSectionDirective } from './shared/blue-section.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightMouse2Directive } from './shared/highlight-mouse2.directive';
import { FinalHighlightDirective } from './shared/final-highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent,
    NgClassDirectiveComponent,
    NgStyleComponentComponent,
    ElvisComponent,
    NgContentComponent,
    BlueSectionDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective,
    HighlightMouse2Directive,
    FinalHighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
