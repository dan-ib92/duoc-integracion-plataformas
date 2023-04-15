import { IsNumber } from 'class-validator';

export class RestarDto {
  @IsNumber()
  public readonly numeroA: number;

  @IsNumber()
  public readonly numeroB: number;
}
