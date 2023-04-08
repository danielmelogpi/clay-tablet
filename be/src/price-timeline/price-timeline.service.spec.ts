import { Test, TestingModule } from '@nestjs/testing';
import { PriceTimelineService } from './price-timeline.service';

describe('PriceTimelineService', () => {
  let service: PriceTimelineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceTimelineService],
    }).compile();

    service = module.get<PriceTimelineService>(PriceTimelineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
