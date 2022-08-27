import { ForRouteModule } from '@core/decorator/routes'
import { Module } from '@nestjs/common'
import { GameDoubleController } from './game.controller'

@ForRouteModule('games')
@Module({
  controllers: [GameDoubleController]
})
export class GameDoubleModule {}
