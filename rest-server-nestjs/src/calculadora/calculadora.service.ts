import { Injectable } from '@nestjs/common';
import { ICalculadoraAdapter } from './calculadora.adapter';

@Injectable()
export class CalculadoraService {
  constructor(private readonly CalculadoraAdapter: ICalculadoraAdapter) {}

  async sumar(a, b): Promise<number> {
    return await this.CalculadoraAdapter.sumar(a, b);
  }

  async restar(a, b): Promise<number> {
    return await this.CalculadoraAdapter.restar(a, b);
  }

  async multiplicar(a, b): Promise<number> {
    return await this.CalculadoraAdapter.multiplicar(a, b);
  }

  async dividir(a, b): Promise<number> {
    return await this.CalculadoraAdapter.dividir(a, b);
  }
}
