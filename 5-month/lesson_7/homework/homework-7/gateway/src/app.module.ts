import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CategoryModule, ChatModule, LocalizationModule, ProductModule } from '@modules';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'client'),
      serveRoot: '/static',
    }),
    CategoryModule,
    ProductModule,
    ChatModule,
    LocalizationModule,
  ],
})
export class AppModule {}
