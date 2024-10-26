import { PartialType } from '@nestjs/mapped-types';
import { CreateTranslateDto } from './create-translate.dto';
import { IsObject, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTranslateDto extends PartialType(CreateTranslateDto) {

    @IsUUID()
    @IsOptional()
    id?: string

    @ApiProperty({
        type: "object",
        example: {
            "en": "Books",
            "uz": "Kitoblar",
            "ru": "kniga"
        }
    })
    @IsObject()
    definitions: Record<string, string>
}
