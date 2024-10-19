import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryClient } from './category.client';
import { ProductClient } from '../product/product.client';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(
    private categoryClient: CategoryClient,
    private productClient: ProductClient,
  ) {}

  create(create: CreateCategoryDto) {
    return this.categoryClient.createOneCategory(create);
  }

  async findAll() {
    const categories = await firstValueFrom(
      this.categoryClient.getCategories(),
    );
    for (const category of categories) {
      const products = await firstValueFrom(
        this.productClient.getProductsByCategoryId(category.id),
      );
      console.log(products);
      category.products = products;
    }
    return categories;
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
