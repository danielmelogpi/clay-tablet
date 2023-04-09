import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioResolver } from './portfolio.resolver';
import { LivePriceModule } from '@/live-price/live-price.module';

@Module({
  imports: [LivePriceModule],
  providers: [PortfolioService, PortfolioResolver]
})
export class PortfolioModule {}
