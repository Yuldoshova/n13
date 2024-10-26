import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma';
import { LanguageModule } from './modules/language/language.module';
import { TranslateModule } from './modules/translate/translate.module';

@Module({
  imports: [PrismaModule, LanguageModule, TranslateModule]
})
export class AppModule {}
