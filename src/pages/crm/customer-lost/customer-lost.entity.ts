import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export  class CustomerLost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  customerId: number;
  @Column()
  managerName: string;
  @Column()
  lastOrderDate: string;
  @Column()
  lostReason: string;
  @Column()
  lostStatus: number;
}
