import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { appConfig, botConfig, dbConfig, jwtConfig } from '@config';
import {
  AuthModule,
  Category,
  CategoryModule,
  Food,
  FoodModule,
  Order,
  OrderItem,
  OrderModule,
  Review,
  ReviewModule,
  UploadModule,
  User,
  UserModule,
} from '@modules';
import { CheckAuthGuard, CheckRoleGuard } from '@guards';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from '@client';
import { session } from 'telegraf';
import { SeedsModule } from '@seeds';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 30000,
      limit: 300,
    }]),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig, jwtConfig, botConfig],
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/uploads',
      rootPath: './uploads',
    }),
    JwtModule.register({
      secret: 'my secret',
      global: true,
      signOptions: {
        expiresIn: 60 * 15,
      },
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        try {
          return {
            dialect: 'postgres',
            host: config.get('database.host'),
            port: config.get<number>('database.port'),
            username: config.get('database.user'),
            password: config.get('database.password'),
            database: config.get('database.dbName'),
            models: [Category, Food, User, Order, OrderItem, Review],
            synchronize: true,
            sync: {force: true},
            logging: console.log,
            autoLoadModels: true,
          };
        } catch (error) {
          console.log(error);
        }
      },
    }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        token: config.get<string>("bot.token"),
        middlewares: [session()]
      })
    }),
    SeedsModule,
    BotModule,
    CategoryModule,
    FoodModule,
    UploadModule,
    UserModule,
    OrderModule,
    ReviewModule,
    AuthModule,
  ],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard
    // },    
    {
      useClass: CheckAuthGuard,
      provide: APP_GUARD,
    },
    {
      useClass: CheckRoleGuard,
      provide: APP_GUARD,
    },
  ],
})
export class AppModule {}