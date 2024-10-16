// src/product/product.service.ts (GATEWAY)
import { Injectable } from '@nestjs/common';
import { ProductClient } from './product.client';

@Injectable()
export class ProductService {
  constructor(private readonly productClient: ProductClient) {}

  async getAllProducts() {
    return this.productClient.getAllProducts()
  }

  async getProduct(id: string) {
    return this.productClient.getProduct(id)
  }

  async createProduct(name: string, price: number, categoryId: string) {
    return this.productClient.createProduct(name, price, categoryId)
  }

  async updateProduct(id: string, name: string, price: number) {
    return this.productClient.updateProduct(id, name, price)
  }

  async deleteProduct(id: string) {
    return this.productClient.deleteProduct(id)
  }
}
