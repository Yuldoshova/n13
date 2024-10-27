import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { CreateCarTypeDto, UpdateCarTypeDto } from './dtos';

@Injectable()
export class CarTypeService {

  constructor(private prisma: PrismaService) { }

  async create(create: CreateCarTypeDto) {
    return await this.prisma.carType.create({
      data: {
        name: create.name
      }
    })
  }

  async findAll() {
    return await this.prisma.carType.findMany({
      include: {
        car: true
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.carType.findFirst({ where: { id } })
  }

  async update(update: UpdateCarTypeDto) {
    return await this.prisma.carType.update({
      where: { id: update.id },
      data: {
        name: update.name
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.carType.delete({ where: { id } })
  }
}
