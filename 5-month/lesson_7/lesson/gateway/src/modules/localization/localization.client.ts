import { Injectable, OnModuleInit } from '@nestjs/common';
import {
    ClientProxy,
    ClientProxyFactory,
    Transport,
} from '@nestjs/microservices';
import { CreateLanguageDto, CreateTranslateDto, UpdateLanguageDto, UpdateTranslateDto } from './dtos';

@Injectable()
export class LocalizationClient implements OnModuleInit {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                port: 3004,
                host: 'localhost',
            },
        });
    }

    async onModuleInit() {
        await this.client.connect();
    }

    createLanguage(payload:CreateLanguageDto) {
        return this.client.send('createLanguage', payload);
    }

    getAllLanguages() {
        return this.client.send('getAllLanguages', '');
    }

    getSingleLanguage(id: string) {
        return this.client.send('getSingleLanguage', id);
    }

    updateLanguage(payload:UpdateLanguageDto) {
        return this.client.send('updateLanguage', payload);
    }

    deleteLanguage(id: string) {
        return this.client.send('deleteLanguage', id);
    }

    createTranslate(payload:CreateTranslateDto) {
        return this.client.send('createTranslate', payload);
    }

    getAllTranslates() {
        return this.client.send('getAllTranslates', '');
    }

    getSingleTranslate(payload: { languageCode: string, translateId: string }) {
        return this.client.send('getSingleTranslate', payload);
    }

    updateTranslate(payload:UpdateTranslateDto) {
        return this.client.send('updateTranslate', payload);
    }

    deleteTranslate(id: string) {
        return this.client.send('deleteTranslate', id);
    }
}
