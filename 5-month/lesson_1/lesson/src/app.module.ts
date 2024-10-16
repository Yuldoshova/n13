import { Module } from '@nestjs/common';
import { ReviewModule, UserModule } from './modules';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[],
      envFilePath:'.env'
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UserModule, ReviewModule]
})
export class AppModule {}
