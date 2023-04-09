import { Query, Resolver } from '@nestjs/graphql';
import { PriceEntryModel } from './model/price-entry.model';
import { PriceTimelineService } from './price-timeline.service';

@Resolver(() => PriceEntryModel)
export class PriceEntryResolver {
  @Query(() => [PriceEntryModel])
  async getCurrentPrice(): Promise<PriceEntryModel[]> {
    return Promise.resolve([]);
  }
}
