import { PartialType } from '@nestjs/mapped-types';
import { CreateConversionTransactionDto } from './create-conversion-transaction.dto';

export class UpdateConversionTransactionDto extends PartialType(
  CreateConversionTransactionDto,
) {}
