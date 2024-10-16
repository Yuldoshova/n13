import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create({
      title: createProductDto.title,
      price: createProductDto.price,
      rating: createProductDto.rating,
    });
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updatedProduct = {
      title: updateProductDto.title,
      price: updateProductDto.price,
      rating: updateProductDto.rating
    }
    await this.productRepository.update(id, {...updatedProduct});
    return this.productRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.productRepository.delete(id);
    return { deleted: true };
  }
}
