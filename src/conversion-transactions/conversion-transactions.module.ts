import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversionTransactionsService } from './conversion-transactions.service';
import { ConversionTransactionsController } from './conversion-transactions.controller';
import { ConversionTransactions } from './conversion-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConversionTransactions])],
  controllers: [ConversionTransactionsController],
  providers: [ConversionTransactionsService],
})
export class ConversionTransactionsModule {}
