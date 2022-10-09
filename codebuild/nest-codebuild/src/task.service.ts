import { Injectable } from '@nestjs/common';
import { TaskRepository } from './repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly repo: TaskRepository) {}
  getHello(): string {
    return 'Hello World!';
  }
}
