import { Module } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';
import { ICalculadoraAdapter } from './calculadora.adapter';
import { CalculadoraPort } from './calculadora.port';

@Module({
  imports: [],
  providers: [
    CalculadoraService,
    {
      provide: ICalculadoraAdapter,
      useClass: CalculadoraPort,
    },
  ],
  exports: [CalculadoraService],
})
export class CalculadoraModule {}
