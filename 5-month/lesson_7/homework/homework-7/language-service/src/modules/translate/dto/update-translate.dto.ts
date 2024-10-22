import { IsObject, IsUUID } from 'class-validator';

export class UpdateTranslateDto {
  @IsUUID(4)
  id: string;

  @IsObject()
  definition: Record<string, string>;
}
