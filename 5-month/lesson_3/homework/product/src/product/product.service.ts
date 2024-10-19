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
    console.log(newProduct)
    newProduct.title = create.title,
      newProduct.price = create.price,
      newProduct.count = create.count,
      newProduct.categoryId = create.categoryId
      console.log(newProduct)
    return await this.productRepo.save(newProduct)
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
      price: update.price,
      count: update.count,
      categoryId: update.categoryId
    });
  }

  async remove(id: number) {
    return await this.productRepo.delete({ id });
  }
}
