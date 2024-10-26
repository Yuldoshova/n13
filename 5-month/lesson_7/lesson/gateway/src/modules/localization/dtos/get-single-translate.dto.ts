import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsUUID, MaxLength } from "class-validator"

export class GetSingleTranslateDto {

    @ApiProperty({
        type: "string",
        example: "en"
    })
    @IsString()
    @MaxLength(2)
    languageCode: string

    @ApiProperty({
        type: "UUID",
        example: ""
    })
    @IsUUID()
    translateId: string
}