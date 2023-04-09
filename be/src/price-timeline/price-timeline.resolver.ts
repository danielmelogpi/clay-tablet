import { Query, Resolver } from '@nestjs/graphql';
import { PriceIndexerModel } from './model/price-indexer.model';
import { PriceTimelineService } from './price-timeline.service';

@Resolver(() => PriceIndexerModel)
export class PriceTimelineResolver {
  constructor(private readonly priceTlService: PriceTimelineService) {}

  @Query(() => [PriceIndexerModel])
  async listPriceIndexers(): Promise<PriceIndexerModel[]> {
    return this.priceTlService.listPriceIndexers();
  }
}
