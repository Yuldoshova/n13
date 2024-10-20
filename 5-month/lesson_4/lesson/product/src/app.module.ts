import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgresql',
      database: 'db2',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
