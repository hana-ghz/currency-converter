import { Module } from '@nestjs/common';
import { ConversionTransactionsService } from './conversion-transactions.service';
import { ConversionTransactionsController } from './conversion-transactions.controller';

@Module({
  controllers: [ConversionTransactionsController],
  providers: [ConversionTransactionsService]
})
export class ConversionTransactionsModule {}
