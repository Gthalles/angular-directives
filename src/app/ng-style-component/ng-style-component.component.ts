import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'style-directive',
  templateUrl: './ng-style-component.component.html',
  styleUrls: ['./ng-style-component.component.css']
})
export class NgStyleComponentComponent implements OnInit {
  // Atributos
  ativo: boolean = false;

  // Métodos
  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.ativo = !this.ativo;
  }

}
