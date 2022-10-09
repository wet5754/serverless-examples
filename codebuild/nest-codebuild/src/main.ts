import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task.module';
import { TaskService } from './task.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(TaskModule);
  const tasksService = app.get(TaskService);
  await tasksService.getHello();
  await app.close();
}
bootstrap();
