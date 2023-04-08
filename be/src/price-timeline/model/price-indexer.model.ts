import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('PriceIndexer', {
  description:
    'A price indexer can be anything with a price, be it static or changing over time'
})
export class PriceIndexerModel {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(() => Int)
  currentEpoc: number;
  @Field(() => String)
  jurisdiction: 'br' | 'us';
}
