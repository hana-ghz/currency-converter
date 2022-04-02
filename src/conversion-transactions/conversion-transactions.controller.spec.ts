import { Test, TestingModule } from '@nestjs/testing';
import { ConversionTransactionsController } from './conversion-transactions.controller';
import { ConversionTransactionsService } from './conversion-transactions.service';

describe('ConversionTransactionsController', () => {
  let controller: ConversionTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConversionTransactionsController],
      providers: [ConversionTransactionsService],
    }).compile();

    controller = module.get<ConversionTransactionsController>(ConversionTransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
