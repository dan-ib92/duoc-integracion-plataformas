import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';
import { ICalculadoraAdapter } from '../calculadora/calculadora.adapter';

@Injectable()
export class SoapClientService implements ICalculadoraAdapter {
  constructor(
    @Inject('CALCULADORA_CLIENT') private readonly soapClient: Client,
  ) {}

  async sumar(numberA: number, numberB: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.soapClient.sumar({ numberA, numberB }, (err, result) => {
        if (err) return reject(err);
        resolve(result.sumarResult);
      });
    });
  }

  async restar(numberA: number, numberB: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.soapClient.restar({ numberA, numberB }, (err, result) => {
        if (err) return reject(err);
        resolve(result.restarResult);
      });
    });
  }

  async multiplicar(numberA: number, numberB: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.soapClient.multiplicar({ numberA, numberB }, (err, result) => {
        if (err) return reject(err);
        resolve(result.multiplicarResult);
      });
    });
  }

  async dividir(numberA: number, numberB: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.soapClient.dividir({ numberA, numberB }, (err, result) => {
        if (err) return reject(err);
        resolve(result.dividirResult);
      });
    });
  }
}
