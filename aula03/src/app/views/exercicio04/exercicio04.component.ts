import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component implements OnInit {

  imagem1 = 'assets/facebook.logo.png';
  imagem2 = 'assets/telegram.png';
  imagem3 = 'assets/youtube.png';

  estiloImagem1='facebook';
  estiloImagem2='telegram';
  estiloImagem3='youtube';

  constructor() { }

  ngOnInit(): void {
  }

}
