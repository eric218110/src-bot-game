import { IsNotEmpty, IsObject } from 'class-validator'
import { ColorModel } from '../colors/colors.model'

export class BetOnModel {
  @IsObject()
  @IsNotEmpty()
  expect: Record<string, ColorModel>
}
