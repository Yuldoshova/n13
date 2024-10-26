import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator"

export class CreateLanguageDto {

    @ApiProperty({
        type: "string",
        maxLength: 64,
        example: "English"
    })
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    title: string

    @ApiProperty({
        type: "string",
        maxLength: 2,
        example: "en"
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    code: string

    @ApiProperty({
        type: "string",
        example: "image.png"
    })
    @IsOptional()
    @IsString()
    image: string

}
