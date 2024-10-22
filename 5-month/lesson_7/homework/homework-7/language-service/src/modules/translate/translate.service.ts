import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTranslateDto } from './dto/create-translate.dto';
import { UpdateTranslateDto } from './dto/update-translate.dto';
import { PrismaService } from '@prisma';
import { GetSingleTranslateDto } from './dto';

@Injectable()
export class TranslateService {
  constructor(private prisma: PrismaService) {}

  async create(createTranslateDto: CreateTranslateDto) {
    await this.prisma.$transaction(async (tx) => {
      const newTranslate = await tx.translate.create({
        data: { code: createTranslateDto.code, type: createTranslateDto.type },
      });

      for (const key of Object.keys(createTranslateDto.definition)) {
        const foundedLang = await tx.language.findFirst({
          where: { code: key },
        });

        if (!foundedLang) {
          throw new NotFoundException(`Language:${key} not found`);
        }

        await tx.definition.create({
          data: {
            value: createTranslateDto.definition[key],
            languageId: foundedLang.id,
            translateId: newTranslate.id,
          },
        });
      }
    });
  }

  async findAll() {
    return await this.prisma.translate.findMany({
      include: { definitions: true },
    });
  }

  async findOne(payload: GetSingleTranslateDto) {
    const translate = await this.prisma.translate.findFirst({
      where: { id: payload.translateId },
    });

    const language = await this.prisma.language.findFirst({
      where: { code: payload.languageCode },
    });

    const definition = await this.prisma.definition.findFirst({
      where: { languageId: language.id, translateId: translate.id },
    });

    if (!definition) {
      return '';
    }

    return definition.value;
  }

  async update(updateTranslateDto: UpdateTranslateDto) {
    return await this.prisma.$transaction(async (tx) => {
      const foundedTranslate = await tx.translate.findFirst({
        where: { id: updateTranslateDto.id },
      });

      if (!foundedTranslate) {
        throw new NotFoundException('Translate not found');
      }

      // Avvalgi barcha definitionlarni o'chiramiz
      await tx.definition.deleteMany({
        where: { translateId: foundedTranslate.id },
      });

      // yangi definitionlar yaratamiz
      for (const key of Object.keys(updateTranslateDto.definition)) {
        const foundedLang = await tx.language.findFirst({
          where: { code: key },
        });

        if (!foundedLang) {
          throw new NotFoundException(`Language:${key} not found`);
        }

        await tx.definition.create({
          data: {
            value: updateTranslateDto.definition[key],
            languageId: foundedLang.id,
            translateId: foundedTranslate.id,
          },
        });
      }
    });
  }

  async remove(id: string) {
    return await this.prisma.translate.delete({ where: { id } });
  }
}
