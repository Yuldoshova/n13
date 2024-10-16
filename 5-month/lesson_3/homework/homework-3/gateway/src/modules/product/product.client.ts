// src/product/product.client.ts (GATEWAY)
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
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

  getAllProducts() {
    return this.client.send('getAllProducts', '');
  }

  getProduct(id: string) {
    return this.client.send('getProduct', { id });
  }

  createProduct(name: string, price: number, categoryId: string) {
    return this.client.send('createProduct', { name, price, categoryId });
  }

  updateProduct(id: string, name: string, price: number) {
    return this.client.send('updateProduct', { id, name, price });
  }

  deleteProduct(id: string) {
    return this.client.send('deleteProduct', { id });
  }
}
