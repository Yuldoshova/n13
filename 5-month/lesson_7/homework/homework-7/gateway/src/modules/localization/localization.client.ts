import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class LocalizationClient implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3003,
        host: 'localhost',
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  getAllLanguages() {
    return this.client.send('findAllLanguage', '');
  }

  getSingleLanguage(id: string) {
    return this.client.send('findOneLanguage', id);
  }

  updateLanguage(payload: {
    id: string;
    name?: string;
    code?: string;
    image?: string;
  }) {
    return this.client.send('updateLanguage', payload);
  }

  createLanguage(payload: { name: string; code: string; image?: string }) {
    return this.client.send('createLanguage', payload);
  }

  deleteLanguage(id: string) {
    return this.client.send('removeLanguage', id);
  }

  getAllTranslates() {
    return this.client.send('findAllTranslate', '');
  }

  getSingleTranslate(payload: { translateId: string; languageCode: string }) {
    return this.client.send('findOneTranslate', payload);
  }

  updateTranslate(payload: { id: string; definition: Record<string, string> }) {
    this.client.send('updateTranslate', payload);
  }

  createTranslate(payload: {
    code: string;
    type: string;
    definition: Record<string, string>;
  }) {
    return this.client.send('createTranslate', payload);
  }

  deleteTranslate(id: string) {
    return this.client.send('removeTranslate', id);
  }
}
