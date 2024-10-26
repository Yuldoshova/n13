import { Module } from '@nestjs/common';
import { CategoryModule, LocalizationModule, ProductModule, UserModule } from '@modules';

@Module({
  imports: [CategoryModule, ProductModule, UserModule, LocalizationModule],
})
export class AppModule { }
