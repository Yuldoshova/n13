import { Module } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { TranslateController } from './translate.controller';
import { PrismaService } from '@prisma';

@Module({
  controllers: [TranslateController],
  providers: [TranslateService, PrismaService],
})
export class TranslateModule {}
