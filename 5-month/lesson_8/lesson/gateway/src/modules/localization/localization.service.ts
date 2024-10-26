import { Injectable } from '@nestjs/common';
import { LocalizationClient } from './localization.client';
import { CreateLanguageDto, CreateTranslateDto, UpdateLanguageDto, UpdateTranslateDto } from './dtos';

@Injectable()
export class LocalizationService {
    constructor(private localizationClient: LocalizationClient) { }

    getLanguageList() {
        return this.localizationClient.getAllLanguages();
    }

    getSingleLanguage(id: string) {
        return this.localizationClient.getSingleLanguage(id);
    }

    createLanguage(payload: CreateLanguageDto) {
        return this.localizationClient.createLanguage(payload);
    }

    updateLanguage(id: string, update: UpdateLanguageDto) {
        return this.localizationClient.updateLanguage({ id, ...update });
    }

    deleteLanguage(id: string) {
        return this.localizationClient.deleteLanguage(id);
    }

    getTranslateList() {
        return this.localizationClient.getAllTranslates();
    }

    getSingleTranslate(payload: { languageCode: string, translateId: string }) {
        return this.localizationClient.getSingleTranslate(payload);
    }

    createTranslate(payload: CreateTranslateDto) {
        return this.localizationClient.createTranslate(payload);
    }

    updateTranslate(id: string, update: UpdateTranslateDto) {
        return this.localizationClient.updateTranslate({ id, ...update });
    }

    deleteTranslate(id: string) {
        return this.localizationClient.deleteTranslate(id);
    }
}
