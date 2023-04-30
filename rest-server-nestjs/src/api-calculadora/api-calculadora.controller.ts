import { Body, Controller, HttpCode, Post, UseFilters } from '@nestjs/common';
import { CalculadoraService } from '../calculadora/calculadora.service';
import { DividirDto } from './dtos/dividir';
import { MultiplicarDto } from './dtos/multiplicar';
import { RestarDto } from './dtos/restar';
import { SumarDto } from './dtos/sumar';
import { ApiResponse } from './responses/response';
import { ValidationExceptionFilter } from '../filters/errors.filter';

@Controller({ path: 'calculadora' })
@UseFilters(ValidationExceptionFilter)
export class ApiCalculadoraController {
  constructor(private readonly service: CalculadoraService) {}

  @Post('sumar')
  @HttpCode(200)
  async sumar(@Body() params: SumarDto): Promise<ApiResponse> {
    const { numeroA, numeroB } = params;
    const result = await this.service.sumar(numeroA, numeroB);
    return new ApiResponse(result);
  }

  @Post('restar')
  @HttpCode(200)
  async restar(@Body() params: RestarDto): Promise<ApiResponse> {
    const { numeroA, numeroB } = params;
    const result = await this.service.restar(numeroA, numeroB);
    return new ApiResponse(result);
  }

  @Post('dividir')
  @HttpCode(200)
  async dividir(@Body() params: DividirDto): Promise<ApiResponse> {
    const { numeroA, numeroB } = params;
    const result = await this.service.dividir(numeroA, numeroB);
    return new ApiResponse(result);
  }

  @Post('multiplicar')
  @HttpCode(200)
  async multiplicar(@Body() params: MultiplicarDto): Promise<ApiResponse> {
    const { numeroA, numeroB } = params;
    const result = await this.service.multiplicar(numeroA, numeroB);
    return new ApiResponse(result);
  }
}
