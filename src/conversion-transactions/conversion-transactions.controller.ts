import { request } from 'http';
import {
  Controller,
  Get,
  Post,
  Request,
  Param,
  UseGuards,
  Bind,
} from '@nestjs/common';
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
  @Bind(Request())
  create(request) {
    const body: CreateConversionTransactionDto = request.body;
    return this.conversionTransactionsService.create(body, request.user.userId);
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
