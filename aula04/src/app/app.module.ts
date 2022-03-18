import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';
import { BindigComponent } from './views/bindig/bindig.component';
import { FormsModule } from '@angular/forms';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';
import { Exercicio03Component } from './views/exercicio03/exercicio03.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio01Component,
    BindigComponent,
    Exercicio02Component,
    Exercicio03Component
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
