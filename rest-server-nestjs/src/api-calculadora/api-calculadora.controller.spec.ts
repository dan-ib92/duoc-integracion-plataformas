import { Test, TestingModule } from '@nestjs/testing';
import { ApiCalculadoraController } from './api-calculadora.controller';
import { SumarDto } from './dtos/sumar';
import { CalculadoraModule } from '../calculadora/calculadora.module';
import { ApiResponse } from './responses/response';

describe('AppController', () => {
  let appController: ApiCalculadoraController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CalculadoraModule],
      controllers: [ApiCalculadoraController],
    }).compile();

    appController = app.get<ApiCalculadoraController>(ApiCalculadoraController);
  });

  describe('root', () => {
    it('should return api response: { result: 3 }', async () => {
      expect(
        await appController.sumar({ numeroA: 1, numeroB: 2 } as SumarDto),
      ).toEqual(new ApiResponse(3));
    });
  });
});
