import { FirstTableModel } from './first-table-model.entity';
import { SecondTableModel } from './second-table-model.entity';

export const ModelProviders = [
  {
    provide: 'FIRST_TABLE_REPOSITORY',
    useValue: FirstTableModel,
  },
  {
    provide: 'SECOND_TABLE_REPOSITORY',
    useValue: SecondTableModel,
  },
];
