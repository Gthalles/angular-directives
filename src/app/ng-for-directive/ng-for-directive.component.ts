import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {
  // Atributos
  cursos: string[ ] = ['Angular', 'Springboot', 'Docker'];  // Métodos

  constructor() { }

  ngOnInit(): void {
  }

}
