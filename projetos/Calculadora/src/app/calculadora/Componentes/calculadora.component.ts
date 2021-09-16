import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void{
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  AdicionarNumero(numero: string): void{
    if(this.operacao === null){
      this.numero1 = this.ConcatenarNumero(this.numero1, numero);
    }else{
      this.numero2 = this.ConcatenarNumero(this.numero2, numero);
    }
  }

  ConcatenarNumero(numAtual: string, numConcat: string): string{
    if(numAtual === '.' || numAtual === null){
      numAtual = '';
    }

    if(numConcat === '.' && numAtual === ''){
      return '0.';
    }

    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }

    return numAtual + numConcat;
  }


  DefinirOperacao(operacao: string): void{
    if(this.operacao === null){
      this.operacao = operacao;
      return;
    }

    if(this.numero2 !== null){
      this.resultado = this.calculadoraService.Calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);

        this.operacao = operacao;
        this.numero1 = this.resultado.toString();
        this.numero2 = null;
        this.resultado = null;      
    }
  }

  Calcular(): void{
    if(this.numero2 === null){
      return;
    }

    this.resultado = this.calculadoraService.Calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);    
  }

  get display(): string{
    if(this.resultado !== null){
      return this.resultado.toString();
    }

    if(this.numero2 !== null){
      return this.numero2;
    }
    return this.numero1;
  }
}
