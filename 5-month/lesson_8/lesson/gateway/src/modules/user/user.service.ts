import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserClient } from './user.client';

@Injectable()
export class UserService {
  constructor(private userClient: UserClient) {}

  create(create: CreateUserDto) {
    return this.userClient.createUser(create);
  }

  findAll() {
    return this.userClient.getAllUsers();
  }

  findOne(id: number) {
    return this.userClient.getSingleUser(id);
  }

  update(update: UpdateUserDto) {
    return this.userClient.updateUser(update);
  }

  remove(id: number) {
    return this.userClient.deleteUser(id);
  }
}
