import { Injectable } from '@nestjs/common';
import { InvestmentCreationDto } from './dto/investment-creation.dto';
import { DatabaseClientService } from '@/database/database-client.service';
import { LivePriceService } from '@/live-price/live-price.service';
import { PriceIndexer, Prisma } from '@prisma/client';
import { InvestmentEntryModel } from './model/investment-entry.model';
import { InvestmentMapper } from '@/mapper/investment.mapper';

@Injectable()
export class PortfolioService {
  constructor(
    private readonly db: DatabaseClientService,
    private readonly livePriceSv: LivePriceService
  ) {}

  // TODO add zod validation
  async addInvestment(
    action: InvestmentCreationDto
  ): Promise<InvestmentEntryModel> {
    const existingIndexer = await this.db.repo.priceIndexer.findFirst({
      where: {
        code: action.indexerCode
      }
    });

    if (!existingIndexer?.id) {
      const newIndexer = await this.db.repo.priceIndexer.create({
        data: {
          code: action.indexerCode,
          name: action.indexerCode
        }
      });
      // TODO add an async signal to retrieve historical prices
      return this.createInvestmentEntry(newIndexer, action);
    }
    return this.createInvestmentEntry(existingIndexer, action);
  }

  private async createInvestmentEntry(
    priceIndexer: PriceIndexer,
    action: InvestmentCreationDto
  ) {
    const created = await this.db.repo.investment.create({
      data: {
        priceIndexerId: priceIndexer.id,
        quantity: action.quantity,
        price: action.price
      }
    });
    return InvestmentMapper.entityToModel(created, priceIndexer);
  }
}
