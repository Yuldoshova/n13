import { Module } from '@nestjs/common';
import { Product, ProductModule } from '@modules';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'abrorbek',
      database: 'test',
     entities: [Product],
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
