import { Query, Resolver } from '@nestjs/graphql';
import { PriceIndexerModel } from './model/price-indexer.model';

@Resolver(() => PriceIndexerModel)
export class PriceTimelineResolver {
  @Query(() => [PriceIndexerModel])
  async listPriceIndexers(): Promise<PriceIndexerModel[]> {
    return Promise.resolve([]);
  }
}
