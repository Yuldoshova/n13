import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dtos/create-language.dto';
import { UpdateLanguageDto } from './dtos/update-language.dto';
import { PrismaService } from '@prisma';

@Injectable()
export class LanguageService {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(create: CreateLanguageDto) {
    return await this.prisma.language.create({
      data: {
        code: create.code,
        title: create.title,
        image: create.image
      }
    });
  }

  async findAll() {
    return await this.prisma.language.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.language.findFirst({ where: { id } });
  }

  async update(id: string, update: UpdateLanguageDto) {
    return await this.prisma.language.update({
      where: { id },
      data: {
        code: update?.code,
        title: update.title,
        image: update?.image
      }
    })
  }

  async remove(id: string) {
    console.log(id)
    return await this.prisma.language.delete({ where: { id } });
  }
}
