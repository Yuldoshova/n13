import { OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

export class ProductClient implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3002,
        host: 'localhost',
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  getProducts() {
    return this.client.send('getAllProducts', '');
  }

  getProduct(id: number) {
    return this.client.send('getSingleProduct', id);
  }

  getProductsByCategoryId(categoryId: number) {
    return this.client.send('getAllProductsByCategoryId', categoryId);
  }

  createOneProduct(create: CreateProductDto) {
    return this.client.send('createProduct', create);
  }

  updateOneProduct(update: UpdateProductDto) {
    return this.client.send('updateProduct', update);
  }

  removeProduct(id: number) {
    return this.client.send('deleteProduct', id);
  }
}
