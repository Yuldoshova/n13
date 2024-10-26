import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { Controller } from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('createUser')
  async create(@Payload() create: CreateUserDto) {
    return await this.userService.create(create);
  }

  @MessagePattern('getAllUsers')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('getSingleUser')
  findOne(@Payload() id: number) {
    return this.userService.findOne(id);
  }

  @MessagePattern('updateUser')
  update(@Payload() update: UpdateUserDto) {
    return this.userService.update(update);
  }

  @MessagePattern('deleteUser')
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}
