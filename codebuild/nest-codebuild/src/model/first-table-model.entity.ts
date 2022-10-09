import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: '', createdAt: false, updatedAt: false })
export class FirstTableModel extends Model {
  @PrimaryKey
  @Column({ field: 'column name' })
  date: string;
}
