import { Test, TestingModule } from '@nestjs/testing';
import { AlfaVantageProviderService } from './alfa-vantage.provider.service';

describe('AlfaVantageProviderTsService', () => {
  let service: AlfaVantageProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlfaVantageProviderService]
    }).compile();

    service = module.get<AlfaVantageProviderService>(
      AlfaVantageProviderService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
