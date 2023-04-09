import { DatabaseClientService } from '@/database/database-client.service';
import { Injectable } from '@nestjs/common';
import { PriceIndexerModel } from './model/price-indexer.model';

@Injectable()
export class PriceTimelineService {
  constructor(private readonly db: DatabaseClientService) {}
  async listPriceIndexers(): Promise<PriceIndexerModel[]> {
    const indexers = await this.db.repo.priceIndexer.findMany();
    return indexers.map((i) => ({
      currentEpoc: 1,
      id: i.id,
      jurisdiction: 'br',
      name: i.name
    }));
  }
}
