import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>
  ) { }

  async create(create: CreateProductDto) {
    const newProduct = new Product()
    newProduct.title = create.title,
      newProduct.price = create.price,
      newProduct.count = create.count,
      newProduct.category_id = create.categoryId
    return await this.productRepo.save(newProduct)
  }

  async findAll() {
    return await this.productRepo.find();
  }

  async findOne(id: number) {
    return await this.productRepo.findBy({ id });
  }

  async findProductsByCategoryId(categoryId: number) {
    return await this.productRepo.find({
      where: {
        category_id: categoryId
      }
    })
  }

  update(update: UpdateProductDto) {
    return this.productRepo.update(update.id, {
      title: update.title,
      price: update.price,
      count: update.count,
      category_id: update.categoryId
    });
  }

  async remove(id: number) {
    return await this.productRepo.delete({ id });
  }
}
