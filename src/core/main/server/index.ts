import { AppModule } from '@module/app'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const { APP_PORT: port = 3000 } = process.env

  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(port)
}

bootstrap()
