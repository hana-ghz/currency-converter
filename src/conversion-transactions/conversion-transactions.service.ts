import { Injectable } from '@nestjs/common';
import { CreateConversionTransactionDto } from './dto/create-conversion-transaction.dto';
import { UpdateConversionTransactionDto } from './dto/update-conversion-transaction.dto';

@Injectable()
export class ConversionTransactionsService {
  create(createConversionTransactionDto: CreateConversionTransactionDto) {
    return 'This action adds a new conversionTransaction';
  }

  findAll() {
    return `This action returns all conversionTransactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversionTransaction`;
  }

  update(id: number, updateConversionTransactionDto: UpdateConversionTransactionDto) {
    return `This action updates a #${id} conversionTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversionTransaction`;
  }
}
