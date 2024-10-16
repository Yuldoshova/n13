import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryModule } from './category/category.module';
import { Category } from './category/models/category.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: "postgres",
    host: "localhost",
    port:5432,
    username: "postgres",
    password: "postgresql",
    database: "db1",
    autoLoadModels: true,
    models: [Category],
    synchronize: true

  }), CategoryModule],
})
export class AppModule {}
