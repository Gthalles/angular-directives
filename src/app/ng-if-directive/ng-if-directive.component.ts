import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {
  // Atributos
  curso: string[] = ['Angular'];
  mostrarCursos: boolean = false;

  // Métodos
  setCurso() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit(){ }
}
