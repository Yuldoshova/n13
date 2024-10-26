import { Module } from '@nestjs/common';
import { AuthModule, CategoryModule, LocalizationModule, ProductModule, UserModule } from '@modules';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/microservice'),
    JwtModule.register({
      global: true,
      secret: "secretkey",
      signOptions: { expiresIn: 120 }
    }),
    AuthModule,
    CategoryModule,
    ProductModule,
    UserModule,
    LocalizationModule,
  ],
})
export class AppModule { }
