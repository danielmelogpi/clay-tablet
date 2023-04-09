import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('InvestmentEntry')
export class InvestmentEntryModel {
  @Field()
  indexerId: string;
  @Field()
  indexerCode: string;
  @Field()
  date: Date;
  @Field(() => Date, { nullable: true })
  expire: Date | null;
  @Field()
  quantity: number;
  @Field()
  price: number;
}
