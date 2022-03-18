import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component implements OnInit {

  //funções coloca aqui 

  constructor() { }

  ngOnInit(): void {
  }

  //propriedades coloca aqui
  paraMaiusculas(palavra:string):string{
    return palavra.toUpperCase();

  }
}
