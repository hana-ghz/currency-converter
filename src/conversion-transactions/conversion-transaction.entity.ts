import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Users } from './../users/users.entity';

@Entity('conversionTransactions')
export class ConversionTransactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  value: number;

  @Column()
  userId: number;

  @ManyToOne(() => Users, (user) => user.conversionTransactions)
  user: Users;
}
