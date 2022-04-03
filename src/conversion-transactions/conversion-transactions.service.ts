import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConversionTransactions } from 'src/conversion-transactions/conversion-transaction.entity';
import { CreateConversionTransactionDto } from './dto/create-conversion-transaction.dto';

@Injectable()
export class ConversionTransactionsService {
  constructor(
    @InjectRepository(ConversionTransactions)
    private readonly conversionTransactionsRepository: Repository<ConversionTransactions>,
  ) {}

  create(
    createConversionTransactionDto: CreateConversionTransactionDto,
  ): Promise<ConversionTransactions> {
    const newTransaction = this.conversionTransactionsRepository.create(
      createConversionTransactionDto,
    );

    return this.conversionTransactionsRepository.save(newTransaction);
  }

  findAll(): Promise<ConversionTransactions[]> {
    return this.conversionTransactionsRepository.find();
  }

  findOne(id: number): Promise<ConversionTransactions> {
    return this.conversionTransactionsRepository.findOne(id);
  }
}
