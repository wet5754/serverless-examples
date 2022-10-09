import { SecondTableModel } from './../../model/second-table-model.entity';
import { Sequelize } from 'sequelize-typescript';
import { FirstTableModel } from 'src/model/first-table-model.entity';
import { ModelProviders } from 'src/model/table-model.providers';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });
      sequelize.addModels(ModelProviders.map((m) => m.useValue));
      await sequelize.sync();
      return sequelize;
    },
  },
];
