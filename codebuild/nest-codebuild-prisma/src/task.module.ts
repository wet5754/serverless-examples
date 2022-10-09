import { Module } from '@nestjs/common';
import { RepoModule } from './database/prisma.module';
import { TaskRepository } from './repositories/task.repository';
import { TaskService } from './task.service';

@Module({
  imports: [RepoModule],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
