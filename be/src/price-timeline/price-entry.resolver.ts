import { Query, Resolver } from '@nestjs/graphql';
import { PriceEntryModel } from './model/price-entry.model';

@Resolver(() => PriceEntryModel)
export class PriceEntryResolver {
  @Query(() => [PriceEntryModel])
  async getCurrentPrice(): Promise<PriceEntryModel[]> {
    return Promise.resolve([]);
  }
}
