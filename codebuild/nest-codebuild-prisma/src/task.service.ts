import { Injectable } from '@nestjs/common';
import { TaskRepository } from './repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly repo: TaskRepository) {}
  async getHello() {
    return await this.repo.findDateOne();
  }
}
