import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  @MessagePattern("createProduct")
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @MessagePattern("getAllProduct")
  findAll() {
    return this.productService.findAll();
  }

  @MessagePattern("getProduct")
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @MessagePattern("updateProduct")
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }


  @MessagePattern("deleteProduct")
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
