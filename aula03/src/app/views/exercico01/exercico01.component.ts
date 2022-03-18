import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercico01',
  templateUrl: './exercico01.component.html',
  styleUrls: ['./exercico01.component.css']
})
export class Exercico01Component implements OnInit {

  nome='Robson';
  sobrenome= 'Candido';

  constructor() { }

  ngOnInit(): void {
  }

}
