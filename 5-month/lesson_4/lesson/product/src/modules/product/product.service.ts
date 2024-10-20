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
    private productRepo: Repository<Product>,
  ) {}

  async create(create: CreateProductDto) {
    const newProduct = new Product();
    newProduct.title = create.title;
    newProduct.description = create.description;
    newProduct.price = create.price;
    newProduct.count = create.count;
    newProduct.rating = create.rating;
    newProduct.category_id = create.categoryId;
    return await this.productRepo.save(newProduct);
  }

  async findAll() {
    return await this.productRepo.find();
  }

  async findOne(id: number) {
    return await this.productRepo.findBy({ id });
  }

  update(update: UpdateProductDto) {
    return this.productRepo.update(update.id, {
      title: update.title,
      description: update.description,
      price: update.price,
      rating: update.rating,
      count: update.count,
      category_id: update.categoryId,
    });
  }

  async remove(id: number) {
    return await this.productRepo.delete({ id });
  }
}
