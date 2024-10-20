import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductClient } from './product.client';
import { CategoryClient } from '../category';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(
    private productClient: ProductClient,
    private categoryClient: CategoryClient,
  ) {}

  async create(create: CreateProductDto) {
    const category = await firstValueFrom(
      this.categoryClient.getCategory(create.categoryId),
    );
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return this.productClient.createOneProduct(create);
  }

  findAll() {
    return this.productClient.getProducts();
  }

  findOne(id: number) {
    return this.productClient.getProduct(id);
  }

  update(update: UpdateProductDto) {
    return this.productClient.updateOneProduct(update);
  }

  remove(id: number) {
    return this.productClient.removeProduct(id);
  }
}
