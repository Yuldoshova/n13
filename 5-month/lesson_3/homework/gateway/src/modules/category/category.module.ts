import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryClient } from './category.client';
import { ProductClient } from '../product/product.client';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryClient, ProductClient],
})
export class CategoryModule {}
