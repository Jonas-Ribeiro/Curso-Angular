import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1+4 = 5', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.Calcular(1,4,CalculadoraService.soma);
      expect(soma).toEqual(5);
    }))

    it('deve garantir que 1-4 = -3', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.Calcular(1,4,CalculadoraService.subtracao);
      expect(subtracao).toEqual(-3);
    }))

    it('deve garantir que 1/4 = 0.25', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.Calcular(1,4,CalculadoraService.divisao);
      expect(divisao).toEqual(0.25);
    }))

    it('deve garantir que 1*4 = 4', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.Calcular(1,4,CalculadoraService.multiplicacao);
      expect(multiplicacao).toEqual(4);
    }))

    it('deve retornar 0 para uma operacao invalida', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.Calcular(1,4,'%');
      expect(operacaoInvalida).toEqual(0);
    }))
});
