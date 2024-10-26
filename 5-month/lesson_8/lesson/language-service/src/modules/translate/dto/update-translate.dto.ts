import { PartialType } from '@nestjs/mapped-types';
import { CreateTranslateDto } from './create-translate.dto';
import { IsObject, IsOptional } from 'class-validator';

export class UpdateTranslateDto extends PartialType(CreateTranslateDto) {
    @IsOptional()
    id: string

    @IsObject()
    definitions: Record<string, string>
}
