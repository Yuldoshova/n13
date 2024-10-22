import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { LocalizationService } from './localization.service';
import {
  CreateLanguageDto,
  CreateTranslateDto,
  UpdateLanguageDto,
  UpdateTranslateDto,
} from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Localization service')
@Controller('localizaton')
export class LocalizationController {
  constructor(private service: LocalizationService) {}

  @Get('/languages')
  getAllLanguages() {
    return this.service.getAllLanguages();
  }

  @Get('/languages/:languageId')
  getSingleLanguage(
    @Param('languageId', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.service.getSingleLanguage(id);
  }

  @Patch('/languages/edit/:languageId')
  updateLanguage(
    @Param('languageId', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() payload: UpdateLanguageDto,
  ) {
    return this.service.updateLanguage({ id, ...payload });
  }

  @Post('/languages/add')
  createLanguage(@Body() payload: CreateLanguageDto) {
    return this.service.createLanguage(payload);
  }

  @Delete('/languages/:languageId')
  removeLanguage(
    @Param('languageId', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.service.removeLanguage(id);
  }

  @Get('/translates')
  getAllTranslates() {
    return this.service.getAllTranslates();
  }

  @Get('/translates/:translateId')
  getSingleTranslate(
    @Param('translateId', new ParseUUIDPipe({ version: '4' })) id: string,
    @Headers('accept-language') languageCode: string,
  ) {
    return this.service.getSingleTranslate({ translateId: id, languageCode });
  }

  @Patch('/translates/edit/:translateId')
  updateTranslate(
    @Param('translateId', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() payload: UpdateTranslateDto,
  ) {
    return this.service.updateTranslate({ id, ...payload });
  }

  @Post('/translates/add')
  createTranslate(@Body() payload: CreateTranslateDto) {
    return this.service.createTranslate(payload);
  }

  @Delete('/translates/:translateId')
  removeTranslate(
    @Param('translateId', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.service.removeTranslate(id);
  }
}
