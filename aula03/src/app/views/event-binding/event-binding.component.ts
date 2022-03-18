import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {


    nome = '' ;
    valor1 = 0;
    valor2 =  1;



    texto='';
    styleClass = 'classA';

  constructor() { }

  ngOnInit(): void {
  }


    mudarTexto(){
      this.texto ='Olá Mundo';

    }
    mudarClasse(){
      if(this.styleClass =='classA'){
        this.styleClass = 'classB';
      }
      else{
        this.styleClass = 'classA';
      }
    }
}
