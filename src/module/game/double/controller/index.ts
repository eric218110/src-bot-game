import { Body, Controller, Post } from '@nestjs/common'
import { InitGameDoubleDTO } from '../dto/initGameDoubleDTO'
import { GameDoubleProvider } from '../provider'

@Controller('game/double')
export class GameDoubleController {
  constructor(private readonly gameDoubleProvider: GameDoubleProvider) {}

  @Post('initBet')
  public iniBet(@Body() body: InitGameDoubleDTO) {
    return this.gameDoubleProvider.initGame(body)
  }
}
