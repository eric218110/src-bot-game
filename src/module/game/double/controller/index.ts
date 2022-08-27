import { Controller, Post } from '@nestjs/common'

@Controller('game/double')
export class GameDoubleController {
  @Post('initBet')
  public iniBet() {
    return {
      status: 'true'
    }
  }
}
