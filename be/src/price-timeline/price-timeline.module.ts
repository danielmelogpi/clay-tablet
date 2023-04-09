import { Module } from '@nestjs/common';
import { PriceTimelineService } from './price-timeline.service';
import { PriceTimelineResolver } from './price-timeline.resolver';
import { PriceEntryResolver } from './price-entry.resolver';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PriceTimelineService, PriceTimelineResolver, PriceEntryResolver]
})
export class PriceTimelineModule {}
