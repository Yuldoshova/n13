import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { PrismaService } from '@prisma';

@Injectable()
export class LanguageService {
  constructor(
    private prisma: PrismaService
  ) { }

  create(create: CreateLanguageDto) {
    return 'This action adds a new language';
  }

  async findAll() {
    return await this.prisma.language.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.language.findFirst({ where: { id } });
  }

  update(id: string, update: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: string) {
    return `This action removes a #${id} language`;
  }
}
