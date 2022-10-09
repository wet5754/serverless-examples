import { Inject, Injectable } from '@nestjs/common';
import { col, fn } from 'sequelize';
import { FirstTableModel } from 'src/model/first-table-model.entity';
import { SecondTableModel } from 'src/model/second-table-model.entity';

@Injectable()
export class TaskRepository {
  constructor(
    @Inject('FIRST_TABLE_REPOSITORY')
    private firstRepo: typeof FirstTableModel,
    @Inject('SECOND_TABLE_REPOSITORY')
    private SecondRepo: typeof SecondTableModel,
  ) {}

  async findDateOne() {
    return this.firstRepo.findOne();
  }
}
