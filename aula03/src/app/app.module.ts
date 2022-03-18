import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './views/interpolation/interpolation.component';
import { Exercico01Component } from './views/exercico01/exercico01.component';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';
import { Exercicio03Component } from './views/exercicio03/exercicio03.component';
import { Exercicio04Component } from './views/exercicio04/exercicio04.component';
import { EventBindingComponent } from './views/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    Exercico01Component,
    Exercicio02Component,
    Exercicio03Component,
    Exercicio04Component,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
