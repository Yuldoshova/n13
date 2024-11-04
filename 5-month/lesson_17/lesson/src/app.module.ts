import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { RedisCustomModule } from '@client';
import { AuthModule } from './modules';

@Module({
  imports: [RedisModule.forRoot({
    type: "single",
    options: {
      port: 6379,
      host: "localhost"
    }
  }),
    RedisCustomModule,
    AuthModule
  ]
})
export class AppModule { }
