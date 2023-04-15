import { IsNumber } from 'class-validator';

export class MultiplicarDto {
  @IsNumber()
  public readonly numeroA: number;

  @IsNumber()
  public readonly numeroB: number;
}
