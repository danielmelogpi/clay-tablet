import { Resolver, Query, Args } from '@nestjs/graphql';
import { LivePriceService } from './live-price.service';
import { LiveValueForTimeRangeModel } from './model/live-price.model';
import { PriceFetchRequestDto } from './price-provider.interface';

@Resolver()
export class LivePriceResolver {
  constructor(private readonly livePriceService: LivePriceService) {}

  @Query(() => LiveValueForTimeRangeModel)
  async getAssetPrice(
    @Args('priceRequest') priceRequest: PriceFetchRequestDto
  ): Promise<LiveValueForTimeRangeModel> {
    return this.livePriceService.getAssetPrice(priceRequest);
  }
}
