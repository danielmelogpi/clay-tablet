import { Field, ObjectType } from '@nestjs/graphql';
import { InvestmentEntryModel } from './investment-entry.model';

@ObjectType('Portfolio')
export class PortfolioModel {
  @Field(() => [InvestmentEntryModel])
  investments: InvestmentEntryModel[];
}
