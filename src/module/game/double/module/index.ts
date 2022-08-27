import { ForRouteModule } from '@core/decorator/routes'
import { Module } from '@nestjs/common'
import { GameDoubleController } from '../controller'
import { GameDoubleProvider } from '../provider'

@ForRouteModule('games')
@Module({
  controllers: [GameDoubleController],
  providers: [GameDoubleProvider]
})
export class GameDoubleModule {}
