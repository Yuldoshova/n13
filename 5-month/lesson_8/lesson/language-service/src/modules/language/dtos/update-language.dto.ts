import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageDto } from './create-language.dto';
import { IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {

    @IsUUID()
    id?: string

    @IsString()
    @MaxLength(64)
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    @MaxLength(2)
    code?: string

    @IsOptional()
    @IsString()
    image?: string
}
