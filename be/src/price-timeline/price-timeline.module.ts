import { Module } from '@nestjs/common';
import { PriceTimelineService } from './price-timeline.service';
import { PriceTimelineResolver } from './price-timeline.resolver';
import { PriceEntryResolver } from './price-entry.resolver';

@Module({
  providers: [PriceTimelineService, PriceTimelineResolver, PriceEntryResolver]
})
export class PriceTimelineModule {}
