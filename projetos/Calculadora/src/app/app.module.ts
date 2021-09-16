import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CalculadoraModule} from './calculadora/calculadora.module'

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/Componentes/calculadora.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
