import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryClient } from './category.client';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryClient],
})
export class CategoryModule {}
