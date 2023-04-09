import { Injectable } from '@nestjs/common';
import { LiveValueForTimeRangeModel } from './model/live-price.model';
import { AlfaVantageProviderService } from './alfa-vantage.provider.ts/alfa-vantage.provider.service';
import { PriceFetchRequestDto } from './price-provider.interface';

@Injectable()
export class LivePriceService {
  constructor(
    private readonly alfaAdvantageProvider: AlfaVantageProviderService
  ) {}

  /** Get the price for an asset, like stocks, reit, funds or basic commodities like gold */
  async getAssetPrice(
    priceRequest: PriceFetchRequestDto
  ): Promise<LiveValueForTimeRangeModel> {
    const prices = await this.alfaAdvantageProvider.getAssetPrice(priceRequest);
    return prices;
  }

  /** Gets the value for an index, like IPCA, CPI, SELIC */
  async getIndexValue(
    dateStart: Date,
    dateEnd: Date,
    assetCode: string
  ): Promise<LiveValueForTimeRangeModel> {
    return Promise.resolve(null);
  }
}
