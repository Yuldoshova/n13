import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTranslateDto } from './dto/create-translate.dto';
import { UpdateTranslateDto } from './dto/update-translate.dto';
import { PrismaService } from '@prisma';
import { GetSingleTranslateDto } from './dto';

@Injectable()
export class TranslateService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(create: CreateTranslateDto) {
    return await this.prisma.$transaction(async (tx) => {
      const newTraslate = await tx.translate.create({
        data: {
          code: create.code,
          type: create.type
        }
      })
      for (let key of Object.keys(create.definitions)) {
        const findlanguage = await tx.language.findFirst({ where: { code: key } })

        if (!findlanguage) {
          throw new NotFoundException(`Language ${key} not found!!!`)
        }

        await tx.definition.create({
          data: {
            value: create.definitions[key],
            languageId: findlanguage.id,
            translateId: newTraslate.id
          }
        })
      }
    })
  }

  async findAll() {
    return await this.prisma.translate.findMany({ include: { definitions: true } });
  }

  async findOne(payload: GetSingleTranslateDto) {
    const findTanslate = await this.prisma.translate.findFirst({
      where: { id: payload.translateId }
    })

    if (!findTanslate) {
      throw new NotFoundException("Translate not found!")
    }

    const findLanguage = await this.prisma.language.findFirst({
      where: { code: payload.languageCode }
    })

    const findDefinition = await this.prisma.definition.findFirst({
      where: { languageId: findLanguage.id, translateId: payload.translateId }
    })

    if (!findDefinition) {
      return ""
    }
    return findDefinition.value
  }

  async update(id: string, update: UpdateTranslateDto) {
    return await this.prisma.$transaction(async (tx) => {
      const findTranslate = await tx.translate.findFirst({
        where: { id }
      })

      if (!findTranslate) {
        throw new NotFoundException(`Translate not found!!!`)
      }

      await tx.definition.deleteMany({ where: { translateId: findTranslate.id } })

      for (let key of Object.keys(update.definitions)) {
        const findlanguage = await tx.language.findFirst({ where: { code: key } })

        if (!findlanguage) {
          throw new NotFoundException(`Language ${key} not found!!!`)
        }

        await tx.definition.create({
          data: {
            value: update.definitions[key],
            languageId: findlanguage.id,
            translateId: findTranslate.id
          }
        })
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.translate.delete({ where: { id } })
  }
}
