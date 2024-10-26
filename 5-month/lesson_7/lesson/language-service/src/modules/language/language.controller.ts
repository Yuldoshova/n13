import { Controller } from '@nestjs/common';
import { LanguageService } from './language.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateLanguageDto, UpdateLanguageDto } from './dtos';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) { }

  @MessagePattern('createLanguage')
  create(
    @Payload() createLanguageDto: CreateLanguageDto
  ) {
    return this.languageService.create(createLanguageDto);
  }

  @MessagePattern('getAllLanguages')
  findAll() {
    return this.languageService.findAll();
  }

  @MessagePattern('getSingleLanguage')
  findOne(
    @Payload() id: string
  ) {
    return this.languageService.findOne(id);
  }

  @MessagePattern('updateLanguage')
  update(
    @Payload() updateLanguageDto: UpdateLanguageDto
  ) {
    return this.languageService.update(updateLanguageDto.id, updateLanguageDto);
  }

  @MessagePattern('deleteLanguage')
  remove(
    @Payload() id: string
  ) {
    return this.languageService.remove(id);
  }
}
