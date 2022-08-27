import { IsNotEmpty, IsNumber } from 'class-validator'

export class BetModel {
  @IsNotEmpty()
  @IsNumber()
  maxWinner: number

  @IsNumber()
  @IsNotEmpty()
  maxLose: number

  @IsNumber()
  @IsNotEmpty()
  amount: number

  @IsNumber()
  @IsNotEmpty()
  multiplierGale: number
}
