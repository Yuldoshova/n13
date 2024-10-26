import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator"

export class CreateLanguageDto {

    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    code: string

    @IsOptional()
    @IsString()
    image: string

}
