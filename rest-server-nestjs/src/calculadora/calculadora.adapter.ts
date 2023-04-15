export abstract class ICalculadoraAdapter {
  abstract sumar(a: number, b: number): number | Promise<number>;
  abstract restar(a: number, b: number): number | Promise<number>;
  abstract multiplicar(a: number, b: number): number | Promise<number>;
  abstract dividir(a: number, b: number): number | Promise<number>;
}
