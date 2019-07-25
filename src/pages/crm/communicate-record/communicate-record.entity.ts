import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CommunicateRecord {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    customerId: string;
    @Column()
    commDate: string;
    @Column()
    commTypes: string;
    @Column()
    commAddress: string;
    @Column()
    commTitle: string;
    @Column()
    commDetail: string;
    @Column()
    commRemark: string;

}
