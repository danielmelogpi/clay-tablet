import { Module } from '@nestjs/common';
import { LivePriceService } from './live-price.service';
import { AlfaVantageProviderService } from './alfa-vantage.provider.ts/alfa-vantage.provider.service';
import { LivePriceResolver } from './live-price.resolver';

@Module({
  providers: [LivePriceService, AlfaVantageProviderService, LivePriceResolver],
  exports: [LivePriceService]
})
export class LivePriceModule {}
