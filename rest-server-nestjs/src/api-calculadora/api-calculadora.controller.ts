import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CalculadoraService } from '../calculadora/calculadora.service';
import { DividirDto } from './dtos/dividir';
import { MultiplicarDto } from './dtos/multiplicar';
import { RestarDto } from './dtos/restar';
import { SumarDto } from './dtos/sumar';
import { ApiResponse } from './responses/response';
import { ValidationExceptionFilter } from '../filters/errors.filter';

@Controller()
@UseFilters(ValidationExceptionFilter)
export class ApiCalculadoraController {
  constructor(private readonly service: CalculadoraService) {}

  @Post('sumar')
  async sumar(@Body() params: SumarDto): Promise<ApiResponse> {
    const { numeroA, numeroB } = params;
    const result = await this.service.sumar(numeroA, numeroB);
    return new ApiResponse(result);
  }

  @Post('restar')
  async restar(@Body() params: RestarDto): Promise<ApiResponse> {
    const { numeroA, numeroB } = params;
    const result = await this.service.restar(numeroA, numeroB);
    return new ApiResponse(result);
  }

  @Post('dividir')
  async dividir(@Body() params: DividirDto): Promise<ApiResponse> {
    const { numeroA, numeroB } = params;
    const result = await this.service.dividir(numeroA, numeroB);
    return new ApiResponse(result);
  }

  @Post('multiplicar')
  async multiplicar(@Body() params: MultiplicarDto): Promise<ApiResponse> {
    const { numeroA, numeroB } = params;
    const result = await this.service.multiplicar(numeroA, numeroB);
    return new ApiResponse(result);
  }
}
