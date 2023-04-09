import { Test, TestingModule } from '@nestjs/testing';
import { LivePriceService } from './live-price.service';

describe('LivePriceService', () => {
  let service: LivePriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivePriceService],
    }).compile();

    service = module.get<LivePriceService>(LivePriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
