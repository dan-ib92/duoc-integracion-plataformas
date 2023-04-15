import { IsNumber } from 'class-validator';

export class SumarDto {
  @IsNumber()
  public readonly numeroA: number;

  @IsNumber()
  public readonly numeroB: number;
}
