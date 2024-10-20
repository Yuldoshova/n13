import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryClient } from './category.client';

@Injectable()
export class CategoryService {
  constructor(private categoryClient: CategoryClient) {}

  create(create: CreateCategoryDto) {
    return this.categoryClient.createOneCategory(create);
  }

  findAll() {
    return this.categoryClient.getCategories();
  }

  findOne(id: number) {
    return this.categoryClient.getCategory(id);
  }

  update(update: UpdateCategoryDto) {
    return this.categoryClient.updateOneCategory(update);
  }

  remove(id: number) {
    return this.categoryClient.removeCategory(id);
  }
}
