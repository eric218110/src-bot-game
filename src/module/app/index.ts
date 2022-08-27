import { loadRoutersModulesRegister } from '@core/decorator/routes'
import { GameDoubleModule } from '@module/game/double/game.module'
import { Module } from '@nestjs/common'
import { RouterModule } from 'nest-router'

@Module({
  imports: [
    RouterModule.forRoutes(loadRoutersModulesRegister('app')),
    GameDoubleModule
  ]
})
export class AppModule {}
