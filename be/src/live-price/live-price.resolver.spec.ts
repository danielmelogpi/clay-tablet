import { Test, TestingModule } from '@nestjs/testing';
import { LivePriceResolver } from './live-price.resolver';

describe('LivePriceResolver', () => {
  let resolver: LivePriceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivePriceResolver],
    }).compile();

    resolver = module.get<LivePriceResolver>(LivePriceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
