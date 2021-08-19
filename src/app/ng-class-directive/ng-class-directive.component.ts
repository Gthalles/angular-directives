import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-directive',
  templateUrl: './ng-class-directive.component.html',
  styleUrls: ['./ng-class-directive.component.css']
})
export class NgClassDirectiveComponent implements OnInit {

  // Atributos
  favorite: boolean = false;

  // Métodos
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.favorite = !this.favorite;
  }

}
