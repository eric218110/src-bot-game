import { AppModule } from '@module/app'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const { APP_PORT: port = 3000 } = process.env
  await app.listen(port)
}

bootstrap()
