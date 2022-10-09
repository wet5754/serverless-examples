import { Module } from '@nestjs/common';
import { ModelProviders } from './table-model.providers';

@Module({
  providers: [...ModelProviders],
  exports: [...ModelProviders],
})
export class ModelModule {}
