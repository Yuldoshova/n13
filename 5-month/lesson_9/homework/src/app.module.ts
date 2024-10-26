import { appConfig } from '@config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from "path"
import { CarModule } from '@modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // -> for code first approach
      // typePaths: ["./src/modules/**/*.gql"],
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      installSubscriptionHandlers: true,
    }),
    CarModule
  ],
})
export class AppModule { }
