import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgresql',
      database: 'db2',
      entities: [Product],
      autoLoadEntities:true,
      synchronize: true,
    }),
    ProductModule],
})
export class AppModule { }
