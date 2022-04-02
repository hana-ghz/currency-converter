import { Test, TestingModule } from '@nestjs/testing';
import { ConversionTransactionsService } from './conversion-transactions.service';

describe('ConversionTransactionsService', () => {
  let service: ConversionTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversionTransactionsService],
    }).compile();

    service = module.get<ConversionTransactionsService>(ConversionTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
