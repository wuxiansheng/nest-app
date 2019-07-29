import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/user.entity';
import { Bank } from '../bank/bank.entity';

@Entity()
export class  Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  realName: string;
  @Column()
  age: number;
  @Column()
  sex: number;
  @Column()
  email: string;
  @Column()
  phone: number;
  @Column()
  address: string;
  @Column()
  address1: string;
  @Column()
  company: string;
  @Column()
  birthday: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated: Date;
  @ManyToOne(type => User, user => user.id)
  owner: User;
  @ManyToOne(type => Bank, bank => bank.id)
  bank: Bank;
}
