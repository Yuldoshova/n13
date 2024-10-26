import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageDto } from './create-language.dto';
import { IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {

    @IsUUID()
    @IsOptional()
    id?: string

    @ApiProperty({
        type: "string",
        maxLength: 64,
        example: "update English"
    })
    @IsString()
    @MaxLength(64)
    @IsOptional()
    title?: string

    @ApiProperty({
        type: "string",
        maxLength: 2,
        example: "en"
    })
    @IsString()
    @IsOptional()
    @MaxLength(2)
    code?: string

    @ApiProperty({
        type: "string",
        example: "image.png"
    })
    @IsOptional()
    @IsString()
    image?: string
}
