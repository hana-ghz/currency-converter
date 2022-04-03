import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ConversionTransactionsService } from './conversion-transactions.service';
import { CreateConversionTransactionDto } from './dto/create-conversion-transaction.dto';

@Controller('conversion-transactions')
export class ConversionTransactionsController {
  constructor(
    private readonly conversionTransactionsService: ConversionTransactionsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createConversionTransactionDto: CreateConversionTransactionDto,
  ) {
    return this.conversionTransactionsService.create(
      createConversionTransactionDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.conversionTransactionsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversionTransactionsService.findOne(+id);
  }
}
