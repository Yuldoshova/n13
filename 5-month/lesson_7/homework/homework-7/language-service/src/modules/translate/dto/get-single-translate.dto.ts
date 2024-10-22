import { IsString, IsUUID, MaxLength } from 'class-validator';

export class GetSingleTranslateDto {
  @IsString()
  @MaxLength(2)
  languageCode: string;

  @IsUUID(4)
  translateId: string;
}
