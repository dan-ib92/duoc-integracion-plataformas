import { ICalculadoraAdapter } from './calculadora.adapter';

export class CalculadoraPort implements ICalculadoraAdapter {
  sumar(a: number, b: number): number | Promise<number> {
    return a + b;
  }
  restar(a: number, b: number): number | Promise<number> {
    return a - b;
  }
  multiplicar(a: number, b: number): number | Promise<number> {
    return a * b;
  }
  dividir(a: number, b: number): number | Promise<number> {
    return a / b;
  }
}
