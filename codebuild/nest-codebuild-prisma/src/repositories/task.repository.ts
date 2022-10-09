import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TaskRepository {
  constructor(private readonly taskRepo: PrismaService) {}

  async findDateOne() {
    return await this.taskRepo.task_table.count();
  }
}
