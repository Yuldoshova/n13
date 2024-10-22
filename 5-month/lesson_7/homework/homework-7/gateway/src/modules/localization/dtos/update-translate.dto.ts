import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';

export class UpdateTranslateDto {
  @ApiProperty({
    type: 'object',
    example: {
      uz: 'Kitoblar',
      en: 'Books',
    },
  })
  @IsObject()
  definition: Record<string, string>;
}
