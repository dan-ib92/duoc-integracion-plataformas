import { IsNumber } from 'class-validator';

export class DividirDto {
  @IsNumber()
  public readonly numeroA: number;

  @IsNumber()
  public readonly numeroB: number;
}
