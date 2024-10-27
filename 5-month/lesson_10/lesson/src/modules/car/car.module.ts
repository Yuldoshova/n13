import { Module } from '@nestjs/common';
import { CarResolver } from './car.resolver';
import { CarService } from './car.service';
import { PrismaService } from '@prisma';

@Module({
  providers: [CarResolver, CarService, PrismaService],
})
export class CarModule {}
