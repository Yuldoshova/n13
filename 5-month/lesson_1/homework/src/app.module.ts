import { appConfig, dbConfig } from '@config';
import { ReviewModule, UserModule } from '@modules';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig],
      envFilePath: '.env'
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>("database.url"),
      })
    }),
    UserModule,
    ReviewModule
  ]
})
export class AppModule { }
