import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class  Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  realName: string;
  @Column()
  age: number;
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
}
