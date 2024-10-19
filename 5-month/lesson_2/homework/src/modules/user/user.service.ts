import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) { }

  async create(create: CreateUserDto): Promise<User> {
    const newUser = this.userRepo.create(create);
    return await this.userRepo.save(newUser)
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.find()
  }

  async findOne(id: number): Promise<User> {
    const findUser = await this.userRepo.findOneBy({ id })
    if (!findUser) {
      throw new NotFoundException("User not found!")
    }
    return findUser
  }

  async update(id: number, update: UpdateUserDto) {
    const findUser = await this.userRepo.findOneBy({ id })
    if (!findUser) {
      throw new NotFoundException("User not found!")
    }

    return await this.userRepo.update(id, {
      name: update.name,
      email: update.email,
      age: update.age
    });
  }

  async remove(id: number) {
    const findUser = await this.userRepo.findOneBy({ id })
    if (!findUser) {
      throw new NotFoundException("User not found!")
    }
    return await this.userRepo.delete(id)
  }
}
