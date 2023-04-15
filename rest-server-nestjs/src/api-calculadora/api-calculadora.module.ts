import { Module } from '@nestjs/common';
import { ApiCalculadoraController } from './api-calculadora.controller';
import { CalculadoraModule } from '../calculadora/calculadora.module';

@Module({
  imports: [CalculadoraModule],
  controllers: [ApiCalculadoraController],
  providers: [],
})
export class ApiCalculadoraModule {}
