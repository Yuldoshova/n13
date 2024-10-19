import { OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';

export class CategoryClient implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3001,
        host: 'localhost',
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  getCategories() {
    return this.client.send('getAllCategories', '');
  }

  getCategory(id: number) {
    return this.client.send('getSingleCategory', id);
  }

  createOneCategory(create: CreateCategoryDto) {
    return this.client.send('createCategory', create);
  }

  updateOneCategory(update: UpdateCategoryDto) {
    return this.client.send('updateCategory', update);
  }

  removeCategory(id: number) {
    return this.client.send('deleteCategory', id);
  }
}
