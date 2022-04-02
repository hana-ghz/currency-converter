import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { ConversionTransactions } from '../conversion-transactions/conversion-transaction.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ConversionTransactions, (transaction) => transaction.user)
  conversionTransactions: ConversionTransactions[];
}
