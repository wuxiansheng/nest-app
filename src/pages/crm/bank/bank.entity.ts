import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export  class Bank {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  bankName: string;
  @Column()
  accountsBank: string;
  @Column()
  bankNo: number;
}
