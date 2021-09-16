import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { ConversorComponent } from './Components/conversor.component';
import { ConversorService, MoedaService } from './services/index';
import { NumeroDirective } from './directives/index';
import { ModalCotacaoComponent } from './utils/index';
import { DataBrPipe } from './pipes/index';



@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
    ],
  exports:[
    ConversorComponent
  ],
  providers: [
    ConversorService,
    MoedaService
  ]
})

export class ConversorModule { }
