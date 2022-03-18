import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer-ng-for',
  templateUrl: './exer-ng-for.component.html',
  styleUrls: ['./exer-ng-for.component.css']
})
export class ExerNgForComponent implements OnInit {
  vetorImg =['assets/doberman.jpg', 'assets/golden.jpg','assets/rotweiller.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
