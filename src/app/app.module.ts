import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgClassDirectiveComponent } from './ng-class-directive/ng-class-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgClassDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
