import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.css']
})
export class ElvisComponent implements OnInit {
  // Atributos
  tarefa: any = {
    description: 'Verificar dados do Alpha',
    duration: {time: '4:30 PM', date: '19/08/2021'}
  };

  // Métodos
  constructor() { }

  ngOnInit(): void {
  }

}
