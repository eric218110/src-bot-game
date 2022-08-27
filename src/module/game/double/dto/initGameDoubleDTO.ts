import { BetModel } from '@module/game/main/model/bet/bet.model'
import { BetOnModel } from '@module/game/main/model/betOn/bet.model'
import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'

export class InitGameDoubleDTO {
  @IsNotEmpty({
    message: 'Field token is required'
  })
  token: string

  @ValidateNested({ each: true })
  @Type(() => BetModel)
  bet: BetModel

  @ValidateNested({ each: true })
  @Type(() => BetOnModel)
  betOn: BetOnModel
}
