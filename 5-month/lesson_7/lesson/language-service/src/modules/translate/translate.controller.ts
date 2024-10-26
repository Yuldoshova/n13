import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { CreateTranslateDto } from './dto/create-translate.dto';
import { UpdateTranslateDto } from './dto/update-translate.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GetSingleTranslateDto } from './dto';

@Controller('translate')
export class TranslateController {
  constructor(private readonly translateService: TranslateService) { }

  @MessagePattern('createTranslate')
  create(
    @Payload() createTranslateDto: CreateTranslateDto
  ) {
    return this.translateService.create(createTranslateDto);
  }

  @MessagePattern('getAllTranslates')
  findAll() {
    return this.translateService.findAll();
  }

  @MessagePattern('getSingleTranslate')
  findOne(
    @Payload() payload: GetSingleTranslateDto
  ) {
    return this.translateService.findOne(payload);
  }

  @MessagePattern('updateTranslate')
  update(
    @Payload() updateTranslateDto: UpdateTranslateDto) {
    return this.translateService.update(updateTranslateDto.id, updateTranslateDto);
  }

  @MessagePattern('deleteTranslate')
  remove(
    @Payload() id: string) {
    return this.translateService.remove(id);
  }
}
