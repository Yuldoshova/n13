import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsObject, IsString } from 'class-validator';

enum TranslateType {
  content = 'content',
  error = 'error',
}

export class CreateTranslateDto {
  @ApiProperty({
    type: 'string',
    example: 'Kitoblar category nomi',
  })
  @IsString()
  code: string;
  
  @ApiProperty({
    type: 'string',
    enum: TranslateType
  })
  @IsEnum(TranslateType)
  type: TranslateType;

  @ApiProperty({
    type: "object",
    example: {
        "uz": "Kitoblar",
        "en": "Books"
    }
  })
  @IsObject()
  definition: Record<string, string>;
}
