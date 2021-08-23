import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {
  // Atributos
  curso: string[] = ["Angular", " Docker", " SpringBoot"];
  mostrarCursos: boolean = false;
  ativo: boolean = false;

  // Métodos
  setCurso() {
    this.mostrarCursos = !this.mostrarCursos;
    this.ativo = !this.ativo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
