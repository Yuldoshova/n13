import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserClient implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3003,
        host: 'localhost',
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  getAllUsers() {
    return this.client.send('getAllUsers', '');
  }

  getSingleUser(id: number) {
    return this.client.send('getSingleUser', id);
  }

  createUser(create: CreateUserDto) {
    return this.client.send('createUser', create);
  }

  updateUser(update: UpdateUserDto) {
    return this.client.send('updateUser', update);
  }

  deleteUser(id: number) {
    return this.client.send('deleteUser', id);
  }
}
