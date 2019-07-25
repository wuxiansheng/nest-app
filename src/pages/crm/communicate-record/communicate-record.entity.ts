import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CommunicateRecord {
    @PrimaryGeneratedColumn()
    id: number;
}
