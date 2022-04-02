import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConversionTransactionsService } from './conversion-transactions.service';
import { CreateConversionTransactionDto } from './dto/create-conversion-transaction.dto';
import { UpdateConversionTransactionDto } from './dto/update-conversion-transaction.dto';

@Controller('conversion-transactions')
export class ConversionTransactionsController {
  constructor(private readonly conversionTransactionsService: ConversionTransactionsService) {}

  @Post()
  create(@Body() createConversionTransactionDto: CreateConversionTransactionDto) {
    return this.conversionTransactionsService.create(createConversionTransactionDto);
  }

  @Get()
  findAll() {
    return this.conversionTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversionTransactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConversionTransactionDto: UpdateConversionTransactionDto) {
    return this.conversionTransactionsService.update(+id, updateConversionTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conversionTransactionsService.remove(+id);
  }
}
