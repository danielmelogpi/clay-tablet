import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('InvestmentEntry')
export class InvestmentEntryModel {
  @Field()
  indexerCode: string;
  @Field()
  date: Date;
  @Field()
  indexerEpoch: string;
  @Field()
  expire: Date | null;
  @Field()
  quantity: number;
  @Field()
  price: number;
  @Field()
  targetId: string;
}
