import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindig',
  templateUrl: './bindig.component.html',
  styleUrls: ['./bindig.component.css']
})
export class BindigComponent implements OnInit {

    nome = '' ;
    valor1 = 0;
    valor2 =  1;


  constructor() { }

  ngOnInit(): void {
  }

}
