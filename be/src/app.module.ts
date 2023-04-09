import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProjectResolver } from './project/project.resolver';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PriceTimelineModule } from './price-timeline/price-timeline.module';
import { DatabaseModule } from './database/database.module';
import { LivePriceModule } from './live-price/live-price.module';
import { ConfigModule } from '@nestjs/config';
import { MapperModule } from './mapper/mapper.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ProjectModule,
    PortfolioModule,
    PriceTimelineModule,
    DatabaseModule,
    LivePriceModule,
    MapperModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
