import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TranslateService } from './translate.service';
import {
  CreateTranslateDto,
  GetSingleTranslateDto,
  UpdateTranslateDto,
} from './dto';

@Controller()
export class TranslateController {
  constructor(private readonly translateService: TranslateService) {}

  @MessagePattern('createTranslate')
  create(@Payload() createTranslateDto: CreateTranslateDto) {
    return this.translateService.create(createTranslateDto);
  }

  @MessagePattern('findAllTranslate')
  findAll() {
    return this.translateService.findAll();
  }

  @MessagePattern('findOneTranslate')
  findOne(@Payload() payload: GetSingleTranslateDto) {
    return this.translateService.findOne(payload);
  }

  @MessagePattern('updateTranslate')
  update(@Payload() updateTranslateDto: UpdateTranslateDto) {
    return this.translateService.update(updateTranslateDto);
  }

  @MessagePattern('removeTranslate')
  remove(@Payload() id: string) {
    return this.translateService.remove(id);
  }
}
