import { TranslateType } from "@prisma/client";
import { IsEnum, IsObject, IsString } from "class-validator";

export class CreateTranslateDto {
    @IsString()
    code: string;

    @IsEnum(TranslateType)
    type: TranslateType;

    @IsObject()
    definition: Record<string, string>
}
