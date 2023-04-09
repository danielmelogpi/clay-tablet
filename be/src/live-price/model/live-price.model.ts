import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('LiveValueForTimeRange')
export class LiveValueForTimeRangeModel {
  @Field(() => String)
  granularity: 'daily';
  @Field(() => Date)
  dateStart: Date;
  @Field(() => Date)
  dateEnd: Date;
  @Field(() => [LiveValueForDateModel])
  prices: LiveValueForDateModel[];
  @Field()
  currency: string;
}

@ObjectType('LiveValueForDate')
export class LiveValueForDateModel {
  @Field(() => Date)
  date: Date;
  @Field()
  day: string;
  @Field()
  price: number;
}
