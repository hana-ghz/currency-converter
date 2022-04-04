import { Injectable } from '@nestjs/common';
import { HttpService } from 'nestjs-http-promise';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConversionTransactions } from 'src/conversion-transactions/conversion-transaction.entity';
import { CreateConversionTransactionDto } from './dto/create-conversion-transaction.dto';

const URL = `http://api.currencylayer.com/live?access_key=962e3e24f94db3925cb310383a5eae24`;

interface IQuote {
  [key: string]: number;
}

interface IResult {
  success: boolean;
  terms: string;
  privacy: string;
  timestap: number;
  source: string;
  quotes: IQuote;
}

@Injectable()
export class ConversionTransactionsService {
  constructor(
    @InjectRepository(ConversionTransactions)
    private readonly conversionTransactionsRepository: Repository<ConversionTransactions>,
    private readonly httpService: HttpService,
  ) {}

  async getConverstionRations(from: string, to: string): Promise<IResult> {
    return await (
      await this.httpService.get(`${URL}&currencies=${from},${to}`)
    ).data;
  }

  async convertValue(from: string, to: string, value: number) {
    const data = await this.getConverstionRations(from, to);
    const USDsource = 'USD' + from;
    const USDtarget = 'USD' + to;
    const convertedValue =
      value * (1 / data.quotes[USDsource]) * data.quotes[USDtarget];
    return convertedValue;
  }

  async create(
    createConversionTransactionDto: CreateConversionTransactionDto,
    userId: number,
  ): Promise<ConversionTransactions> {
    const { from, to, value } = createConversionTransactionDto;

    const convertedValue = await this.convertValue(from, to, value);
    const newTransaction = this.conversionTransactionsRepository.create({
      from,
      to,
      initialValue: value,
      convertedValue,
      userId,
    });

    return this.conversionTransactionsRepository.save(newTransaction);
  }

  findAll(): Promise<ConversionTransactions[]> {
    return this.conversionTransactionsRepository.find();
  }

  findOne(id: number): Promise<ConversionTransactions> {
    return this.conversionTransactionsRepository.findOne(id);
  }
}
