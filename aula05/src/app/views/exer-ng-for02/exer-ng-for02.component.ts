import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer-ng-for02',
  templateUrl: './exer-ng-for02.component.html',
  styleUrls: ['./exer-ng-for02.component.css']
})
export class ExerNgFor02Component implements OnInit {


  vetorPaises =['assets/brasil.jpg', 'assets/argentina.jpg','assets/.africa.jpg']
  constructor() { }

  ngOnInit(): void {
  }

  mostrarNome(pais:string){
    alert(pais);
  }

}
