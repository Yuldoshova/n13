import { Category, CategoryModule } from '@modules';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgresql',
      database: 'db1',
      models: [Category],
      autoLoadModels: true,
      synchronize: true,
      sync: { force: true }
    }),
    CategoryModule],
})
export class AppModule { }
