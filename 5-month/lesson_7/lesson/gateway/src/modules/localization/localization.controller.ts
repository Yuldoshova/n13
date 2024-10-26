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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalizationService } from './localization.service';
import { CreateLanguageDto, CreateTranslateDto, UpdateLanguageDto, UpdateTranslateDto } from './dtos';

@ApiTags('Localization Service')
@Controller('/localization')
export class LocalizationController {
    constructor(private service: LocalizationService) { }

    @ApiOperation({ summary: 'Get all languages' })
    @Get('/languages')
    getLanguages() {
        return this.service.getLanguageList();
    }

    @ApiOperation({ summary: 'Get single language' })
    @Get('/languages/:languageId')
    getSingleLanguage(
        @Param('languageId', new ParseUUIDPipe({ version: '4' })) languageId: string
    ) {
        return this.service.getSingleLanguage(languageId);
    }

    @ApiOperation({ summary: 'Create language' })
    @Post('/languages/add')
    createLanguage(
        @Body() payload: CreateLanguageDto
    ) {
        return this.service.createLanguage(payload);
    }

    @ApiOperation({ summary: 'Update language' })
    @Patch('/languages/update/:languageId')
    updateLanguage(
        @Param('languageId', new ParseUUIDPipe({ version: '4' })) languageId: string,
        @Body() payload: UpdateLanguageDto,
    ) {
        return this.service.updateLanguage(languageId, payload);
    }

    @ApiOperation({ summary: 'Delete language' })
    @Delete('/languages/delete/:languageId')
    deleteLanguage(
        @Param('languageId', new ParseUUIDPipe({ version: '4' })) languageId: string
    ) {
        return this.service.deleteLanguage(languageId);
    }

    @ApiOperation({ summary: 'Get all translates' })
    @Get('/translates')
    getTranslates() {
        return this.service.getTranslateList();
    }

    @ApiOperation({ summary: 'Get single translate' })
    @Get('/translates/:translateId')
    getSingleTranslate(
        @Param('translateId', new ParseUUIDPipe({ version: '4' })) translateId: string,
        @Headers("accept-language") languageCode: string
    ) {
        return this.service.getSingleTranslate({ translateId, languageCode });
    }

    @ApiOperation({ summary: 'Create translate' })
    @Post('/translates/add')
    createTranslate(
        @Body() payload: CreateTranslateDto
    ) {
        return this.service.createTranslate(payload);
    }

    @ApiOperation({ summary: 'Update translate' })
    @Patch('/translates/update/:translateId')
    updateTranslate(
        @Param('translateId', new ParseUUIDPipe({ version: '4' })) translateId: string,
        @Body() payload: UpdateTranslateDto,
    ) {
        return this.service.updateTranslate(translateId, payload);
    }

    @ApiOperation({ summary: 'Delete translate' })
    @Delete('/translates/delete/:translateId')
    deleteTranslate(
        @Param('translateId', new ParseUUIDPipe({ version: '4' })) translateId: string
    ) {
        return this.service.deleteTranslate(translateId);
    }
}
