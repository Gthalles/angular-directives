import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }