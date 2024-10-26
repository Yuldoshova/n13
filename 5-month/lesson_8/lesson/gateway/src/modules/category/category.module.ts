import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryClient } from './category.client';
import { CategoryController } from './category.controller';
import { LocalizationClient, LocalizationService } from '../localization';

@Module({
  providers: [LocalizationClient, LocalizationService, CategoryService, CategoryClient],
  controllers: [CategoryController],
})
export class CategoryModule {}
