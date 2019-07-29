import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/user.entity';
@Entity()
export class CommunicateRecord {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(type => User, user => user.id)
    customerId: User;
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
    commRemark: string
}
