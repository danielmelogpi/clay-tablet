import { InvestmentEntryModel } from '@/portfolio/model/investment-entry.model';
import { Investment, PriceIndexer } from '@prisma/client';

const entityToModel = (
  investment: Investment,
  priceIndexer: PriceIndexer
): InvestmentEntryModel => {
  return {
    date: investment.startDate,
    expire: null,
    indexerCode: priceIndexer.code,
    indexerId: priceIndexer.id,
    price: investment.price,
    quantity: investment.quantity
  };
};

const modelToEntity = (investment: InvestmentEntryModel): Investment => {
  return {
    startDate: investment.date,
    price: investment.price,
    quantity: investment.quantity,
    id: null,
    liquidationDate: null,
    priceIndexerId: investment.indexerId
  };
};

export const InvestmentMapper = {
  modelToEntity,
  entityToModel
};
