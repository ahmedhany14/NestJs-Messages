import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe()); // for validation, it will automatically validate the incoming data
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
