import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateConversionTransactionDto {
  @IsString()
  @IsNotEmpty()
  from: string;

  @IsString()
  @IsNotEmpty()
  to: string;

  @IsNumber()
  value: number;
}
