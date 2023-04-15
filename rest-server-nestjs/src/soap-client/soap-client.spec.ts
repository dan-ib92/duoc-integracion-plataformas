import { Test, TestingModule } from '@nestjs/testing';
import { SoapClientService } from './soap-client.service';
import { SoapClientModule } from './soap-client.module';

describe('Soap Client Test', () => {
  let soapClient: SoapClientService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [SoapClientModule],
      controllers: [],
      providers: [SoapClientService],
    }).compile();

    soapClient = app.get<SoapClientService>(SoapClientService);
  });

  describe('Sumar', () => {
    it('Suma 2 valores. 1 + 2 = 3', async () => {
      expect(await soapClient.sumar(1, 2)).toBe(3);
    });
  });

  describe('Restar', () => {
    it('Resta 2 valores. 10 - 5 = 5', async () => {
      expect(await soapClient.restar(10, 5)).toBe(5);
    });
  });

  describe('Multiplicar', () => {
    it('Multiplica 2 valores. 4 * 4 = 16', async () => {
      expect(await soapClient.multiplicar(4, 4)).toBe(16);
    });
  });

  describe('Dividir', () => {
    it('Divide 2 valores. 12 / 2 = 6', async () => {
      expect(await soapClient.dividir(12, 2)).toBe(6);
    });
  });
});
