import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgIfComponent } from './views/exemplo-ng-if/exemplo-ng-if.component';
import { FormsModule } from '@angular/forms';
import { ExerNgifComponent } from './views/exer-ngif/exer-ngif.component';
import { CalculadoraComponent } from './views/calculadora/calculadora.component';
import { ExemploNgforComponent } from './views/exemplo-ngfor/exemplo-ngfor.component';
import { ExerNgForComponent } from './views/exer-ng-for/exer-ng-for.component';
import { ExerNgFor02Component } from './views/exer-ng-for02/exer-ng-for02.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgIfComponent,
    ExerNgifComponent,
    CalculadoraComponent,
    ExemploNgforComponent,
    ExerNgForComponent,
    ExerNgFor02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
