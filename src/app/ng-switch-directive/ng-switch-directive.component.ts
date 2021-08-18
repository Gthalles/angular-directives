import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent implements OnInit {
  // Atributos
  aba: string = "home";

  constructor() { }

  ngOnInit(): void {
  }

}
