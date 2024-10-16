// src/product/product.controller.ts (GATEWAY)
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Post()
  async createProduct(@Body() createProductDto: { name: string, price: number, categoryId: string }) {
    return this.productService.createProduct(createProductDto.name, createProductDto.price, createProductDto.categoryId);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() updateProductDto: { name: string, price: number }) {
    return this.productService.updateProduct(id, updateProductDto.name, updateProductDto.price);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
