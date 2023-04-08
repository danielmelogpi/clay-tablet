import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { PriceIndexerModel } from './price-indexer.model';

@ObjectType('PriceEntry')
export class PriceEntryModel {
  @Field(() => PriceIndexerModel)
  priceIndexer: PriceIndexerModel;
  @Field(() => Float)
  price: number;
  @Field(() => Int)
  indexerEpoch: number;
}
