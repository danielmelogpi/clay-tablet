import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PortfolioService } from './portfolio.service';
import { InvestmentCreationDto } from './dto/investment-creation.dto';
import { InvestmentEntryModel } from './model/investment-entry.model';

@Resolver()
export class PortfolioResolver {
  constructor(private readonly portfolioSrv: PortfolioService) {}

  @Mutation(() => InvestmentEntryModel)
  async addInvestment(@Args('action') action: InvestmentCreationDto) {
    return this.portfolioSrv.addInvestment(action);
  }
}
