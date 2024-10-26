import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(create: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.name = create.name;
    newUser.phone = create.phone;
    newUser.email = create.email;
    newUser.image = create.image;

    await this.userRepo.save(newUser);
    return newUser;
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(id: number) {
    return await this.userRepo.findOne({ where: { id } });
  }

  async update(update: UpdateUserDto) {
    const foundUser = await this.userRepo.findOne({ where: { id: update.id } });

    if (!foundUser) {
      throw new NotFoundException('User not found');
    }

    return await this.userRepo.update(
      { id: update.id },
      {
        name: update.name,
        email: update.email,
        phone: update.phone,
        image: update.image,
      },
    );
  }

  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
}
