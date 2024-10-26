import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsObject, IsString } from "class-validator"

enum TranslateType {
    content = "content",
    error = "error"
}

export class CreateTranslateDto {

    @ApiProperty({
        type: "string",
        example: "en"
    })
    @IsString()
    code: string

    @ApiProperty({
        enum: TranslateType,
        example: "content"
    })
    @IsEnum(TranslateType)
    type: TranslateType

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
