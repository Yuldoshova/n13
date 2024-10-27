import { Module } from '@nestjs/common';
import { CarTypeService } from './car-type.service';
import { CarTypeResolver } from './car-type.resolver';
import { PrismaService } from '@prisma';

@Module({
  providers: [CarTypeResolver, CarTypeService, PrismaService],
})
export class CarTypeModule {}
