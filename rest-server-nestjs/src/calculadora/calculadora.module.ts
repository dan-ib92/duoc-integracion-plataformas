import { Module } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';
import { SoapClientModule } from '../soap-client/soap-client.module';
import { SoapClientService } from '../soap-client/soap-client.service';
import { ICalculadoraAdapter } from './calculadora.adapter';

@Module({
  imports: [SoapClientModule],
  providers: [
    CalculadoraService,
    {
      provide: ICalculadoraAdapter,
      useClass: SoapClientService,
    },
  ],
  exports: [CalculadoraService],
})
export class CalculadoraModule {}
