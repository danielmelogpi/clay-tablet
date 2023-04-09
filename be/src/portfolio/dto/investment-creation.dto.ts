import { Field, InputType } from '@nestjs/graphql';

@InputType('InvestmentCreationDto')
export class InvestmentCreationDto {
  @Field({ defaultValue: 'stock' })
  type: 'stock';
  @Field()
  indexerCode: string;
  @Field()
  date: Date;
  @Field()
  quantity: number;
  @Field()
  price: number;
}
