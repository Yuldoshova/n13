import { Injectable } from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dtos';
import { PrismaService } from '@prisma';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) { }

  async getCarList() {
    return await this.prisma.car.findMany()
  }

  async getOneCar(id: number) {
    return await this.prisma.car.findFirst({ where: { id } })
  }

  async createCar(payload: CreateCarDto) {
    return await this.prisma.car.create({
      data: {
        brand: payload.brand,
        price: payload.price,
        color: payload.color,
        year: payload.year,
        carTypeId: payload.carTypeId
      }
    })
  }

  async updateCar(payload: UpdateCarDto) {
    return await this.prisma.car.update({
      where: { id: payload.id },
      data: {
        brand: payload.brand,
        price: payload.price,
        color: payload.color,
        year: payload.year,
        carTypeId: payload.carTypeId
      }
    })
  }

  async deleteCar(id: number) {
    return await this.prisma.car.delete({ where: { id } })
  }
}
