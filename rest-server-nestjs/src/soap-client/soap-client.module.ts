import { Module } from '@nestjs/common';
import { SoapModule } from 'nestjs-soap';
import { SoapClientService } from './soap-client.service';
// import { ICalculadoraAdapter } from '../calculadora/calculadora.adapter';

@Module({
  imports: [
    SoapModule.register({
      clientName: 'CALCULADORA_CLIENT',
      uri: 'http://localhost:8099/?wsdl',
    }),
  ],
  providers: [SoapClientService],
  exports: [SoapClientService, SoapModule],
})
export class SoapClientModule {}
