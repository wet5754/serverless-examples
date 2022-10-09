import { Module } from '@nestjs/common';
import { ModelModule } from './model/table-model.module';
import { TaskRepository } from './repositories/task.repository';
import { TaskService } from './task.service';

@Module({
  imports: [ModelModule, TaskRepository],
  controllers: [],
  providers: [TaskService],
})
export class TaskModule {}
